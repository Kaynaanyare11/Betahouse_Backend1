var express = require('express');
const UserController = require('../controller/UserController')
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.getUsers);
router.post(
  '/signup',UserController.signup);
module.exports = router;
