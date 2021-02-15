const {Router} = require('express');
const { ObjectId } = require('mongodb');
const router = Router();
const connection = require('../config/db');
const {sendEmail} = require('./emailCredentials');

//models
const User = require('../models/User');
const Task = require('../models/Task');

/* //NODEMAILER CONFIG
const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service:'gmail',
  host:'smtp.gmail.com',
  auth:{
      user: 'sbetagra13@gmail.com',
      pass: ''
  }
});
 */
// MONGOOSE CRUD    

//USERS
router.post('/', async(req, res)=>{
    const {email, password} = req.body;
    const users = await User.find({email: email, password:password});
    res.json(users);
});

router.post('/signup', async(req, res)=>{
    const {name, surname, email, password} = req.body;
    const newUser = new User({name, surname, email, password});
    newUser.save();
    res.json({'message': 'New user has been added!'})    
});

//SEND EMAIL W/ CREDENTIALS
router.post('/send', sendEmail);

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

router.delete('/:id', async(req,res)=>{
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.json({'message': 'The user has been deleted'})
});


//TASKS
router.get('/dashboard/:id', async(req, res)=>{
    const user = req.params.id
    const tasks = await Task.find(
        {user:user}
    );
    res.json(tasks);
});

router.post('/dashboard', async(req, res)=>{
    const {taskname, urlimage, priority, image, expdate, user} = req.body;
    const newTask= new Task({taskname, urlimage, priority, image, expdate, user});

    newTask.save();
    res.json({'message': 'New task has been added!'})
});

router.put('/dashboard/:id', async(req, res)=>{
    const {name, email, priority, image, expdate, user} = req.body;
    const id = req.params.id;

    Task.findByIdAndUpdate(id, {
        $set: req.body
    }, (err, result)=>{
        if(err){
            console.error(err)
        }
        res.json({'message': result})
    })
});

router.delete('/dashboard/:id', async(req,res)=>{
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    res.json({'message': 'The task has been deleted'})
});

module.exports = router;
