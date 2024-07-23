const userModel = require('../models/users.model.js')
const addUser = async (req, res) => {
    // await userModel.create({
    //     name: req.body.userName,
    //     password: req.body.password
    // })
    console.log(req.body)
    // res.status(200).json({ message: 'success' })
}
const getUser = (req, res) => {

}
const updateUser = (req, res) => {

}
const deleteUser = (req, res) => {

}
module.exports = { addUser, updateUser, deleteUser, getUser }