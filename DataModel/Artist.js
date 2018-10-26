'use strict'

var mongoose =  require('mongoose'); // library for mongo interaction
var Schema = mongoose.Schema;
// Schema create a  model of and  entity and add columns like id 
var ArtistSchema = Schema({
                        name: string,
                        description: string,
                        image: string});

module.exports = mongoose.module('Artist',ArtistSchema);


