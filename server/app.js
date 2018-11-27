const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userModel = require('./models/user');


//mongoose.connect('mongodb://localhost/Lazarusdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoute = require('./routes/users');
userRoute(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
