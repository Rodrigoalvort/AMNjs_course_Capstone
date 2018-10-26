'use strict'

var mongoose =  require('mongoose'); // library for mongo interaction
var Schema = mongoose.Schema;
// Schema create a  model of and  entity and add columns like id 
var SongSchema = Schema({
                        title: string,
                        number: number,
                        duration: number,
                        file: string,
                        albub: {type: Schema.ObjecId, ref:'Abum'}}); // relacion a una tabla de la base de datos

module.exports = mongoose.module('Song',SongSchema);


