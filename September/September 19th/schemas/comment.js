const mongoose = require('mongoose')
//const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId

const commentSchema = new mongoose.Schema({
    title: String,
    body: String
})

//mongoose will create a posts collection in the database
const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment