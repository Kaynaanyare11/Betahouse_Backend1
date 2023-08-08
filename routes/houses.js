const express = require('express')
const router = express.Router()
const housesControllers = require('../controller/HouseController')
const AuthenticateRoute = require('./AuthenticationMiddleware')
/* GET home page. */
router.get('/',AuthenticateRoute(["Admin","SuperAdmin","CustomerCare"]), housesControllers.getHouses)
router.post('/',AuthenticateRoute(["Admin","SuperAdmin"]), housesControllers.createHouse)
router.put('/:id',AuthenticateRoute(["Admin","SuperAdmin"]), housesControllers.PutHouse)
router.delete('/:id',AuthenticateRoute(["Admin","SuperAdmin"]), housesControllers.DeleteHouse)

module.exports = router
