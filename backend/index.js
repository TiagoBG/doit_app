const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.set('port', 8083);
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

app.use('/', require('./routes/routes'));

app.listen(app.get('port'),()=>{
    console.log(`Servidor conectado en el puerto ${app.get('port')}`);
});