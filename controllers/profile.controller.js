// const userModel = require('../models/users.model.js')
const show = (req, res, next) => {
    res.render('profile.html')
}
module.exports = { show }