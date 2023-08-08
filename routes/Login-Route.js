var express = require('express');
const route = express.Router();
const Login= require('../controller/LoginController')
route.post('/',Login)

module.exports= route