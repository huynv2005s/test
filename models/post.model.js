const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    createAt: {
        type: String,
        default: new Date()
    }
})
const postModel = mongoose.model('Posts', postSchema)
module.exports = postModel