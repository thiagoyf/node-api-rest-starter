const express = require('express')

const routes = express.Router()

const Usercontroller = require('./app/controllers/UserController')

routes.get('/signup', Usercontroller.create)
routes.post('/signup', Usercontroller.store)

module.exports = routes
