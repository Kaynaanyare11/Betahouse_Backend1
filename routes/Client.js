const express = require('express')
const router = express.Router()
const ClientControllers = require('../controller/ClientController')
const AuthenticateRoute = require('./AuthenticationMiddleware')
/* GET home page. */
router.get('/',ClientControllers.getClient)
router.get('/:id',AuthenticateRoute(["Admin","SuperAdmin","CustomerCare"]), ClientControllers.getClientById)
router.post('/',AuthenticateRoute(["Admin","SuperAdmin"]), ClientControllers.createClient)
router.put('/:id',AuthenticateRoute(["Admin","SuperAdmin"]), ClientControllers.PutClient)
router.delete('/:id',AuthenticateRoute(["SuperAdmin"]), ClientControllers.DeleteClient)

module.exports = router
