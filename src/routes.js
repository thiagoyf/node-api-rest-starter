const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const routes = express.Router()

const Usercontroller = require('./app/controllers/UserController')

routes.get('/signup', Usercontroller.create)
routes.post('/signup', upload.single('avatar'), Usercontroller.store)

module.exports = routes
