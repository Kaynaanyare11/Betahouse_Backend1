const express = require('express')
const router = express.Router()
const housesControllers = require('../controller/HouseController')

/* GET home page. */
router.get('/', housesControllers.getHouses)
router.post('/', housesControllers.createHouse)
router.put('/:id', housesControllers.PutHouse)

module.exports = router
