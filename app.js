'use strict'

var express = require('express'); // web infraestructure  
var bodyParser = require('body-parser');

var app = express(); // create the variable express
// load routes

var user_routes = require('./Routes/User')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); // convert http request in json structure

// configure http headers.....



// Base path
app.use('/api',user_routes)

module.exports =    app;


