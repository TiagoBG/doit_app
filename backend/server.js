require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('./config/db');

//settings
app.set('port', process.env.PORT|| 8083);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/', require('./routes/routes'));


//JWT authentication
app.get('/', (req, res) => {
	res.json({
		text: 'api jwt'
	});
});

app.post('/', (req, res) => {
	const { email,password } = req.body;
	const user = {
		email,
		password
    };
    
	const token = jwt.sign({ user }, 'geek');
	res.json({token});
});


app.get('/dashboard', verificarToken ,(req, res) => {
	jwt.verify(req.token, 'geek', (err, data) => {
		if(err) {
			res.sendStatus(403);
		} else {
			res.json({
				text: 'User\'s Dashboard',
				data
			});
		}
	});
});

function verificarToken(req, res, next) {
	const bearerheader = req.headers["authorization"];
	console.log(bearerheader)
	if(typeof bearerheader !== 'undefined') {
		const bearer = bearerheader.split(" ");
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	} else {
		res.sendStatus(403);
	}
}
//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Servidor conectado en el puerto ${app.get('port')}`);
});