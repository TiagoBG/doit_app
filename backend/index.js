const express = require('express');
const morgan = require('morgan');
const cors= require('cors');
const mongodb = require('mongodb');
const app = express();

app.set('port', 5001)
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

// app.use('/user', require('./routes/tasks'));

app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')}`);
});