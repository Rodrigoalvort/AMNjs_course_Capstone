'use strict'
var User = require('../DataModel/User');// import model of  Users
var bcrypt = require('bcrypt-nodejs'); //  import library for password encryptation
// create a function tha receive a request and return a response
function pruebas(req,res){
    res.status(200).send(
        {
            message:'Probando el controlador....'   
        });
}

function saveUser(req,res){
    var user = new User();// instance a new object user in the model
    var params = req.body; // save request params
    user.name = params.name;
    user.lastname = params.lastname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = null;
    
    if (params.password)
    {
        
        // encrypt password
        bcrypt.hash(params.password,null,null,function(err,hash)
        {
        user.password = hash;
        if (user.name != null && user.lastname != null  && user.email != null)
        {
            user.save((err,userStored) =>
            {   if (err)
                {
                    res.status(500).send({message:'save process error'});
                }
                else
                {
                    if (!userStored)
                    {
                        res.status(404).send({message:'user is not registered'});
                  }
                    else
                    {
                        res.status(200).send({message:userStored});
                
                    }
                }
            });
        }
        else
        {
            res.status(200).send({message: 'Rellena todos los campos'});
        }
        });
    }
    else
    {
        res.status(500).send({message:'Introduce Password'});

    }

}

// to use the function in other modules  we have to export this function by using
// a function that we create will be in this place
module.exports = {
    pruebas,
    saveUser
};
