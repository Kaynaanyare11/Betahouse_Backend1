const express = require('express')
const router = express.Router()
const ClientControllers = require('../controller/ClientController')

/* GET home page. */
router.get('/', ClientControllers.getClient)
router.get('/:id', ClientControllers.getClientById)
router.post('/', ClientControllers.createClient)
router.put('/:id', ClientControllers.PutClient)

module.exports = router
