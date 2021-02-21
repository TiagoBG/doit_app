const {Router} = require('express');
const { ObjectId } = require('mongodb');
const router = Router();
const connection = require('../config/db');
const {sendEmail} = require('./emailCredentials');
const {sendImg} = require('../routes/images');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');

//models and validation schemas
const User = require('../models/user');
const Task = require('../models/task');
const {registerValidation} = require('../routes/validation');
const {loginValidation} = require('../routes/validation');

// MONGOOSE CRUD    

//USERS
//user login
router.post('/', async(req, res)=>{
    const {email, password} = req.body;

    //validation before log the user
    const {error} = loginValidation(req.body);
    if(error) return  res.status(400).send(error.details[0].message);

    //check if user does not exists
    const user = await User.findOne({email: email})
    if(!user) return res.status(400).send('Oops... User does not exists! Please signup');
    //check password
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('Oops... Invalid password');

    //get the user and assign a token
    const token = jwt.sign({_id: user.id, name:user.name}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

//create a new user
router.post('/signup', async(req, res)=>{
    const {name, surname, email, password} = req.body;

    //validation before create the user
    const {error} = registerValidation(req.body);
    if(error) return  res.status(400).send(error.details[0].message);

    //check if existing user email
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('Oops... Email already exists! Please check the info');

    //encrypt/hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating the user
    const newUser = new User({name, surname, email, password: hashedPassword});
    try{
        newUser.save();
        res.json({'message': 'New user has been added!'});
    }catch(err){
        res.status(400).send(err);
    } 
});

//send email w/ credentials
router.post('/send', sendEmail);


//modify an user
router.put('/:id', async(req, res)=>{
    const {name, surname, email, password} = req.body;
    const id = req.params.id;

    User.findByIdAndUpdate(id, {
        $set: req.body
    }, (err, result)=>{
        if(err){
            console.error(err)
        }
        res.json({'message': result})
    })
});

//delete an user
router.delete('/:id', async(req,res)=>{
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.json({'message': 'The user has been deleted'})
});


//TASKS
//get the tasks with token validation
router.get('/dashboard/:id', async(req, res)=>{
    const user = req.params.id
    const tasks = await Task.find(
        {user:user}
    ).sort({priority:1});
    res.json(tasks);
});

//create a task
router.post('/dashboard', async(req, res)=>{
    const {taskname, urlimage, priority, expdate, user} = req.body;
    const newTask= await new Task({taskname, urlimage, priority, expdate, user});

    newTask.save();
    res.json({'message': 'New task has been added!'})
});

//insert image
router.post('/dashboard/image', sendImg);

//edit a task
router.post('/dashboard/:id', async(req, res)=>{
    const id = req.params.id
    const {taskname, urlimage, priority, expdate, user} = req.body;
       const task = await Task.findOneAndUpdate(
        {_id:ObjectId(id)},
        {taskname: taskname,
        urlimage: urlimage,
        priority: priority,
        expdate:expdate,
        user: user
    }
    );
    res.json(task);
});
/* router.put('/dashboard/:id', async(req, res)=>{
    const {taskname, urlimage, priority, image, expdate, user} = req.body;
    const id = req.params.id;

    Task.findByIdAndUpdate(id, {
        $set: req.body
    }, (err, result)=>{
        if(err){
            console.error(err)
        }
        res.json({'message': result})
    })
}); */

//delete a task
router.delete('/dashboard/:id', async(req,res)=>{
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    res.json({'message': 'The task has been deleted'})
});

module.exports = router;
