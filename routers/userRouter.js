const express = require('express')
const { addUser } = require('../controllers/user.controller')
const userRouter = express.Router()
userRouter.post('/add', addUser)

module.exports = userRouter 