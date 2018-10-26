'use strict'

var mongoose =  require('mongoose'); // library for mongo interaction
var Schema = mongoose.Schema;
// Schema create a  model of and  entity and add columns like id 
var UserSchema = Schema({
                        name: String,
                        lastname: String,
                        password: String,
                        role: String,
                        email: String,
                        image: String});

module.exports = mongoose.model('User',UserSchema);


