const express = require('express')
const { checkLogin } = require('../middleware/jwt.js')
const { getAllPost, createPost, loadPage } = require('../controllers/post.controller.js')
const postRouter = express.Router()

postRouter.get('/getPost', getAllPost)
postRouter.post('/createPost', createPost)
postRouter.get('/', checkLogin, loadPage)

module.exports = postRouter