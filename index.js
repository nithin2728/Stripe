const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()

app.use(express.json());

//Exporting routes
const user = require('./src/routes/userRoutes');
const customer = require('./src/routes/customerRoutes');

//declaring routes
app.use('/user', user);
app.use('/customer', customer);


app.listen(port, 'localhost', () =>{
    console.log('Running in', port);
})