const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser:true, 
}).then(console.log(`DB Connected :)`))
.catch(error=>console.error(error));