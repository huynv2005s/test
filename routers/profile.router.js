const express = require('express')
const { show } = require('../controllers/profile.controller.js')
const profileRouter = express.Router()
const { checkLogin } = require('../middleware/jwt.js')
profileRouter.get('/', checkLogin, show)

module.exports = profileRouter 