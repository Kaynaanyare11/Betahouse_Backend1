var express = require('express');
var router = express.Router();
const InfoControllers = require('../controller/InfoController');

/* GET home page. */
router.get('/',InfoControllers.getInfo);
router.post('/',InfoControllers.createInfo);

module.exports = router;
