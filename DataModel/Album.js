'use strict'

var mongoose =  require('mongoose'); // library for mongo interaction
var Schema = mongoose.Schema;
// Schema create a  model of and  entity and add columns like id 
var AlbumSchema = Schema({
                        title: string,
                        description: string,
                        image: string,
                        year: number,
                        artist: {type: Schema.ObjecId, ref:'Artist'}}); // relacion a una tabla de la base de datos

module.exports = mongoose.module('Album',AlbumSchema);


