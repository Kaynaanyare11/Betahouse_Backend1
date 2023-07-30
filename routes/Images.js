const express = require('express')
const router = express.Router()
const ImagesControllers = require('../controller/Images')

/* GET home page. */
router.get('/', ImagesControllers.getImages)
router.get('/:id', ImagesControllers.getImagesById)
router.post('/', ImagesControllers.createImages)
router.put('/:id', ImagesControllers.PutImages)
router.delete('/:id', ImagesControllers.DeleteImages)

module.exports = router
