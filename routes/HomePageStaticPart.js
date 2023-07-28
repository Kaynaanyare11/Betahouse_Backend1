const express = require('express')
const router = express.Router()
const StaticHomePageParts = require('../controller/HomePageStacticPart')
/* GET home page. */
router.get('/', StaticHomePageParts.getStatic)
router.get('/:id', StaticHomePageParts.getStaticById)
router.post('/', StaticHomePageParts.createStatic)
router.put('/:id', StaticHomePageParts.PutStatic)
module.exports = router
