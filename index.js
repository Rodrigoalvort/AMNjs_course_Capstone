'use strict' //enable to use the js new standard

// create connection with mongodb Database
var mongoose = require('mongoose'); // load a library with the command require
var app = require('./app');
var port = process.env.port || 3977;


mongoose.connect('mongodb://localhost:27017/TestDB',(err,res)=>
    {if (err){
        throw err; 
    }
    else {
        console.log('The database is running!!!!!!');
        app.listen(port,function()
        {
            console.log("server is listening in the port "+port);
        });
        
    }}); // connect with the database TestDB 





