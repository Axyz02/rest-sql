const { json } = require('express');
const express = require('express');
const app = express();

// * Settings
app.set('port', process.env.PORT ||3000);

// * Middlewares
app.use(express.json());

// * Routes
app.use(require('./routes/employees'));

//! Seteando el servidor 
app.listen(3000, ()  =>{
    console.log('Server on port ', app.get('port'));
})