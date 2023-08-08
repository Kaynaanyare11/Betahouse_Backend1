var express = require('express');
const UserController = require('../controller/UserController')
const AuthenticateRoute = require('./AuthenticationMiddleware')
var router = express.Router();

/* GET users listing. */
router.get('/',AuthenticateRoute(["Admin","SuperAdmin"]), UserController.getUsers);
router.delete('/:id',AuthenticateRoute(["SuperAdmin"]), UserController.DeleteUser);
router.post(
  '/signup',AuthenticateRoute(["SuperAdmin"]),UserController.signup);
module.exports = router;
