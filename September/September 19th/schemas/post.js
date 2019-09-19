const mongoose = require('mongoose')
const Comment = require('./comment')

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [Comment.schema]
})

// mongoose will create a post collection in the database
const Post = mongoose.model('Post',postSchema)

module.exports = Post