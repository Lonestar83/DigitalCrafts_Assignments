const express = require('express')
const app = express()
var mongoose = require('mongoose')
const Post = require('./schemas/post')
const Comment = require('./schemas/comment')

app.use(express.json())

//First, connect to the MongoDB database
mongoose.connect('mongodb:localhost/blogdb', {useNewsURLPArser: true}, (error) => {
    if(!error) {
        console.log('Successfully connected to MongoDB database!')
    }
});

app.post('/comments', (req, res) => {

    const postId = req.body.postId
    const title = req.body.title
    const body = req.body.body

    const comment = new Comment({
        title: title,
        body: body
    })

    Post.findById(postId, (error, post) => {
        post.comments.push(comment)
        post.save(error => {
            if(!error) {
                res.json({success: true})
            } else {
                res.json({error})
            }
        })
    })
})

app.put('/posts', (req,res) => {

    const postId = req.body.postId
    const title = req.body.title
    const body = req.body.body

    //const updatedPost = {title, postId, body}

    const updatedPost = {
        title: title,
        postId: postId,
        body: body
    }

    Post.findByIdAndUpdated(postId, updatedPost, (error, result) => {
        if(error) {
            res.json({error: 'Unable to updated'})
        } else {
            res.json({updated: true})
        }
    })    
})

app.delete('/posts/:postId', (req,res) => {

    //get the postId from the route parameter
    const postId = req.params.postId

    Post.remove({
        _id: postId
    }, (error, result) => {
        if(error) {
            res.json({error: 'Unable to delete post'})
        } else {
            res.json(result)
        }
    })
})

// /posts
app.get('/posts/:postId', (req,res) => {

    //get the postId from the route parameter
    const postId = req.params.postId

    Post.findById(postId,((error, post) => {
        if(error) {
            res.json({error: 'Unable to get post'})
        } else {
            res.json(post)
        }
    }))

    //finding the post by title
    /*
    Post.findOne({
        title: 'Hello Python'
    }, (error, post) => {
        res.json(post)
    }) */  
})

app.post('/posts',(req,res) => {
    
    const title = req.body.title
    const body = req.body.description

    let post = new Post({
        title: title,
        body: body
    })

    post.save((error) => {
        if(error) {
            res.json({error: 'Unable to save'})
        } else {
            res.json({success: true, message: 'Saved new post!'})
        }
    })
})

// get all posts
app.get('/posts',(req,res) => {
    Post.find({}, (error,posts) => {
        if(error) {
            res.json({error: 'Unable to fetch posts!'})
        } else {
            res.json(posts)
        }
    })
})

app.listen(3000, () => {
    console.log('Server is running...')
})