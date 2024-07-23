const jwt = require('jsonwebtoken')
const userModel = require('../models/users.model.js')
const checkLogin = async (req, res, next) => {
    try {
        const userId = req.cookies.token
        const token = jwt.verify(userId, 'idUserLogin')
        // console.log("cookie", token)
        const user = await userModel.findOne({ _id: token.idUserLogin })
        if (!user) {
            res.send({ message: 'User not found' })
        } else {
            next()
        }
    } catch (error) {
        res.status(401).json('Token not found')
    }

}
const show = (req, res, next) => {
    res.render('profile.html')
}
module.exports = { show, checkLogin }