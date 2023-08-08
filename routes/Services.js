var express = require('express');
var router = express.Router();
const ServiceControllers = require('../controller/ServicesControlller');
const AuthenticateRoute = require('./AuthenticationMiddleware')
/* GET home page. */
router.get('/',ServiceControllers.getService);
router.post('/',AuthenticateRoute(["Admin","SuperAdmin","CustomerCare"]),ServiceControllers.createService);
router.get('/:id',AuthenticateRoute(["Admin","SuperAdmin","CustomerCare"]),ServiceControllers.getServiceById);
router.put('/:id',AuthenticateRoute(["Admin","SuperAdmin","CustomerCare"]),ServiceControllers.PutService);
router.delete('/:id',AuthenticateRoute(["Admin","SuperAdmin"]),ServiceControllers.DeleteService);

module.exports = router;
