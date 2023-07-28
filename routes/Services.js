var express = require('express');
var router = express.Router();
const ServiceControllers = require('../controller/ServicesControlller');

/* GET home page. */
router.get('/',ServiceControllers.getService);
router.post('/',ServiceControllers.createService);
router.get('/',ServiceControllers.getServiceById);
router.put('/',ServiceControllers.PutService);

module.exports = router;
