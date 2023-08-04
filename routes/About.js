const express = require('express')
const router = express.Router()
const AboutController = require('../controller/AboutController')

/* GET home page. */
router.get('/', AboutController.getAbout)
router.get('/:id', AboutController.getAboutById)
router.post('/', AboutController.createAbout)

module.exports = router
