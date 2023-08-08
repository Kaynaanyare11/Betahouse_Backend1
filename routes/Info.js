var express = require('express');
var router = express.Router();
const InfoControllers = require('../controller/InfoController');
const AuthenticateRoute = require('./AuthenticationMiddleware')
/* GET home page. */
router.get('/',InfoControllers.getInfo);
router.post('/',AuthenticateRoute(["Admin","SuperAdmin"]),InfoControllers.createInfo);

module.exports = router;
