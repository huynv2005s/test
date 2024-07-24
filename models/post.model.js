const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    password: String
})
const postModel = mongoose.model('Post', postSchema)
module.exports = userModel