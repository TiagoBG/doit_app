const mongoose = require('mongoose');
const { db } = require('../models/user');

mongoose.connect('mongodb://127.0.0.1/doit_db', {
    useNewUrlParser:true, 
}).then(db=>console.log(`DB Connected :)`))
.catch(error=>console.error(error));