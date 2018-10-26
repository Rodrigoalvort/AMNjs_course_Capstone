'use strict'

var express = require('express');
var UserController = require('../Controllers/User');

var api = express.Router();

api.get('/Probando-Controlador',UserController.pruebas);
api.post('/Save-User',UserController.saveUser);

module.exports = api;