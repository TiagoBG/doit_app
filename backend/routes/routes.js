const {Router} = require('express');
const router = Router();
const connection = require('../config/db');

router.get('/', async(req, res)=>{
    const db = await connection();
    db.collection('users').find()
    .toArray(function(error, users){
        res.json(users);
    })    
});

router.post('/', async(req, res)=>{
    const db = await connection();
    const {name, surname, email, password} = req.body;

    db.collection('users').insertOne({
        name, 
        surname, 
        email, 
        password
    }, function(err, info){
        res.json(info.ops[0]);
    });
});

module.exports = router;
