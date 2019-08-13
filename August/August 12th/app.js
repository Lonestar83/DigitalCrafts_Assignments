//First, I set the tools that I will be using.
const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
let postDelete = document.getElementById('postDelete')

app.use(express.urlencoded())

//This line of code tells express to use the mustache templating engine.
app.engine('mustache', mustacheExpress())
//The pages are located in the 'views' directory.
app.set('views', './views')
//The extension I will be using is '.mustache'
app.set('view engine', 'mustache')

//These lines of code connect my app.js file to my Postgresgl database.
var pgp = require('pg-promise')();
var connectionString = 'postgres://localhost:5432/myblog';
db = pgp(connectionString);

//This code sets up my 'index' page.
app.get('/', (req,res) => {
    db.any('SELECT postid, title, entry, datecreated FROM blogposts ORDER BY datecreated DESC;')
    .then(posts => {
        res.render('index', {blogposts: posts})
    }).catch(error => {
        res.render('index', {message: 'No posts found!'})
    })
})

//This code sets up my 'add-post' page.
app.get('/add-post', (req,res) => {
    res.render('add-post')
})

//This code gives functionality to my 'add-post' page.
app.post('/add-post', (req,res) => {

    let title = req.body.postTitle
    let entry = req.body.postEntry

    db.none('INSERT INTO blogposts(title,entry) VALUES($1,$2)',[title,entry]).then(() => {
        res.redirect('/') 
    })
})

//This code creates an 'update' page.
app.get('/update-post', (req, res) => {
    res.render('update-post')
})

//This give functionality to the 'update' button.
app.post('/update-post', (req,res) => {
    let postTitle = req.body.postTitle
    let postEntry = req.body.postEntry
    let postUpdate = req.body.postUpdate

    db.none('UPDATE blogposts SET title= $1, entry= $2 WHERE postid = $3',[postTitle, postEntry, postUpdate]).then(() => {
        res.redirect('/')
    })
})

//This gives functionality to the 'delete' button.
app.post('/delete-post', (req,res) => {
    let postdelete = req.body.postDelete
    console.log(postdelete)
    db.none('DELETE FROM blogposts WHERE title = postdelete').then(() => {
    res.redirect('/')
    })
})

//Without this line of code my program will not work.
app.listen(3000, () => {
    console.log('Server is running...')
})
