const postModel = require('../models/post.model.js')
const jwt = require('jsonwebtoken')
const getAllPost = async (req, res) => {
    const posts = await postModel.find()
    res.status(200).json(posts)
}
const createPost = async (req, res, next) => {
    const userId = req.cookies.token
    const token = jwt.verify(userId, 'idUserLogin')
    const post = await postModel.create({
        title: req.body.title,
        description: req.body.description,
        author: token.idUserLogin
    })
    console.log(post)
    res.status(200).render('post.html')
}
const loadPage = (req, res) => {
    res.render('post.html')
}
module.exports = { getAllPost, createPost, loadPage }