const userModel = require('../models/users.model.js')
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    await userModel.create({
        name: req.body.userName,
        password: req.body.password
    })
    console.log(req.body)
    res.status(200).json({ message: 'success' })
}
const login = async (req, res) => {
    const user = await userModel.findOne({
        name: req.body.userName,
        password: req.body.password
    })
    console.log('user', req.body)
    if (!user) {
        res.status(500).json({ message: 'login not successful' })
    } else {
        const token = jwt.sign({ idUserLogin: user._id }, 'idUserLogin')
        res.cookie('token', token)
        res.status(200).render('home.html')
    }
}
const loginForm = (req, res) => {
    res.render('login.html')
}
module.exports = { register, loginForm, login }