const express = require('express')
const { show, checkLogin } = require('../controllers/profile.controller.js')
const profileRouter = express.Router()
profileRouter.get('/', checkLogin, show)

module.exports = profileRouter 