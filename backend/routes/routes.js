const {Router} = require('express');
const { ObjectId } = require('mongodb');
const router = Router();
const connection = require('../config/db');
const {sendEmail} = require('./emailCredentials');

const User = require('../models/User');
const Task = require('../models/Task');

//NODEMAILER CONFIG
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
router.post('/send', (req,res)=>{

    let {name,surname,email, password } = req.body;

    let contentHTML = `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            </head>
            <body>
            <div style="max-width:625px;margin-top:0;margin-left:auto;margin-bottom:0;margin-right:auto"> 
                <table border="0" cellpadding="0" cellspacing="0" dir="ltr" id="m_22375324755315983container" style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif" width="100%"> 
                <tbody> 
                <tr> 
                <td align="left" id="m_22375324755315983preheaderRow" style="line-height:1em;text-align:left;font-size:12px;padding-top:0;padding-right:0;padding-bottom:12px;padding-left:0"></td> 
                </tr> 
                <tr> 
                <td align="left" id="m_22375324755315983logoRow" style="background-color:#f5f5f5;line-height:1em;padding-bottom:18px;padding-left:13px;padding-right:13px;padding-top:24px;text-align:left" valign="middle"> 
                <table align="left" cellpadding="0" cellspacing="0" id="m_22375324755315983logo" style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif" width="200"> 
                <tbody> 
                <tr> 
                <td align="left" style="line-height:1em;text-align:left" valign="middle"><img alt="Indeportes Antioquia" border="0" src="http://35.227.16.4:5000/static/media/logo-indeportes.4416d0fc.png" style="border-top-style:none;border-left-style:none;border-bottom-style:none;border-right-style:none;display:block;outline:none" title="Google for Education" width="200" class="CToWUd"></td> 
                </tr> 
                </tbody> 
                </table> 
                <table align="right" cellpadding="0" cellspacing="0" id="m_22375324755315983date" style="border-collapse:collapse;color:#666666;font-family:Helvetica,Arial,sans-serif;font-size:16px;text-align:right!important;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none" width="289"> 
                <tbody> 
                <tr> 
                <td align="right" id="m_22375324755315983Edition" height="26" style="line-height:1em;text-align:right;padding-top:0;padding-right:30px;padding-bottom:0;padding-left:0" valign="middle"></td> 
                </tr> 
                </tbody> 
                </table></td> 
                </tr> 
                <tr> 
                <td align="left" id="m_22375324755315983contentRow" style="background-color:#f5f5f5;line-height:1em;padding-bottom:13px;padding-left:13px;padding-right:13px;padding-top:0;text-align:left"> 
                <table cellpadding="0" cellspacing="0" id="m_22375324755315983moduleContainer" style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif" width="100%"> 
                <tbody> 
                <tr> 
                <td align="left" style="line-height:1em;text-align:left;padding-bottom:20px"> 
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;color:#666666;font-family:Helvetica,Arial,sans-serif;border-top-color:#e9e9e9;border-right-color:#e9e9e9;border-bottom-color:#e9e9e9;border-left-color:#e9e9e9;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px" width="100%"> 
                <tbody> 
                <tr> 
                <td align="left" style="background-color:#ffffff;line-height:1em;padding-bottom:30px;padding-left:31px;padding-right:31px;padding-top:30px;text-align:left"> 
                <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif" width="100%"> 
                <tbody> 
                <tr> 
                <td align="left" id="m_22375324755315983IntroHeadline" style="line-height:26px;text-align:left;font-size:14px;font-weight:normal;padding-bottom:10px">
                <span style="font-family:helvetica,arial,sans-serif;font-size:14px">
                Hello, ${name + surname}<br><br>
                Thank you for your application for the Associate Cloud Engineer track.<br><br>
                We are pleased to confirm your application has been accepted. 
                Your password: ${password}
                Please <a href="https://go.google-mkto.com/X2C0A2P3Ac00CYUJe017TI0" style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff;color:#4381fd;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://go.google-mkto.com/X2C0A2P3Ac00CYUJe017TI0&amp;source=gmail&amp;ust=1573939758104000&amp;usg=AFQjCNEzxxEGAIVzU_5PUO6K4afYvMqYrQ">set up your Coursera</a>&nbsp;account using the email address you used to apply for the Associate Cloud Engineer Track as soon as possible to prevent any issues when provisioning your benefits. <br><br>
                Please email <a href="https://go.google-mkto.com/WT0glAPUC3U1C2A00ecJW00" style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff;color:#4381fd;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://go.google-mkto.com/WT0glAPUC3U1C2A00ecJW00&amp;source=gmail&amp;ust=1573939758104000&amp;usg=AFQjCNFIrjDAFYUavwmkghyxKlb0abkv5Q">acecircuit@google.com</a> once you have successfully created the Coursera account.<br><br>
                Welcome to the Associate Cloud Engineer track!<br><br>
                Thank you,<br>
                The Google Cloud Platform Education Programs Team
                </span><br style="color:#666666;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff">
                 </td> 
                </tr> 
                </tbody> 
                </table></td> 
                </tr> 
                </tbody> 
                </table></td> 
                </tr> 
                <tr> 
                <td align="left" id="m_22375324755315983emailCopyright" style="line-height:16px;text-align:left;padding-top:0;padding-right:30px;padding-bottom:21px;padding-left:30px"><a style="color:#666666!important;text-decoration:none" href="#m_22375324755315983_">© 2019 Indeportes Dirección..., CA 94043</a></td> 
                </tr> 
                <tr> 
                <td></td> 
                </tr> 
                </tbody> 
                </table></td> 
                </tr> 
                </tbody> 
                </table> 
                </div>
            </body>
            </html>`;

    const mailOptions = {
        from: 'DoIt App',
        to:email,
        subject:'DoIt Registration',
        html: contentHTML
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log(`sent: ${info.response}`);
            res.json({message:'Email Sent'});
        }

    });

});

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
router.get('/dashboard', async(req, res)=>{
    const tasks = await Task.find().sort('_id');
    res.json(tasks);
});

router.post('/dashboard', async(req, res)=>{
    const {name, email, priority, image, expdate} = req.body;
    const newTask= new Task({name, email, priority, image, expdate});

    newTask.save();
    res.json({'message': 'New task has been added!'})
});

router.put('/dashboard/:id', async(req, res)=>{
    const {name, email, priority, image, expdate} = req.body;
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
