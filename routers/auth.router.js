const express = require('express')
const { register, loginForm, login } = require('../controllers/auth.controller')
const authRouter = express.Router()
authRouter.post('/register', register)
authRouter.get('/login', loginForm)
authRouter.post('/login', login)

module.exports = authRouter 