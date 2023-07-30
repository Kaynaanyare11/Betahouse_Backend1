var express = require('express');
var router = express.Router();
const ServiceControllers = require('../controller/ServicesControlller');

/* GET home page. */
router.get('/',ServiceControllers.getService);
router.post('/',ServiceControllers.createService);
router.get('/:id',ServiceControllers.getServiceById);
router.put('/:id',ServiceControllers.PutService);
router.put('/:id',ServiceControllers.DeleteService);

module.exports = router;
