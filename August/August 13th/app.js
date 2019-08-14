//First, I initialize my node programs.
const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const app = express()
const bcrypt = require('bcrypt')

//This code initializes sessions.
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

//This sets up my middleware.
app.use(express.urlencoded())

//This line of code keeps users from viewing 'auth' pages without being logged in.
app.all('/auth/*',authenticate)

//This code creates an authentication middleware. 
function authenticate(req,res,next) {
    if(req.session) {
        if(req.session.user.userid) {
            // perform the original request 
            next()
        } else {
            res.redirect('/login')
        }
    }
}

//This line of code tells express to use the mustache templating engine.
app.engine('mustache', mustacheExpress())
//The pages are located in the 'views' directory.
app.set('views', './views')
//The extension I will be using is '.mustache'
app.set('view engine', 'mustache')

//This code connects me to my database.
var pgp = require('pg-promise')();
var connectionString = 'postgres://localhost:5432/myblog';
var db = pgp(connectionString);

//This code creates the 'register' page.
app.get('/register', (req,res) => {
    res.render('register')
})

//This gives functionality to the 'register' page.
app.post('/register', (req, res) => {
    let username = req.body.usernameBox
    let password = req.body.passwordBox

    //This encrypts the password.
    bcrypt.hash(password, 10).then(function(hash) {
        //The stores the hash in my password database.
        db.none('INSERT INTO users(username,password) VALUES($1,$2);', [username, hash]).then(() => {
            console.log('User successfully registered!')
            res.redirect('/login')
        })
    });
})


//The code creates the 'login' page.
app.get('/login', (req,res) => {
    res.render('login')
})

//This gives functionality to the 'login' page.
app.post('/login', (req,res) => {
    let username = req.body.usernameBox
    let password = req.body.passwordBox

    db.one('SELECT userid, username, password FROM users WHERE username = $1',[username]).then(user => {
        if(user) {
            //This line of code compares the password.
            bcrypt.compare(password, user.password).then(function(result) {
                //If password matches, do the following.
                if(result) {
                    req.session.user = {userid: user.userid, username: user.username}
                    res.redirect('/auth/main')
                } else {
                    res.redirect('/login')
                    //res.send('Error: incorrect username or password')
                }
            });
        } else {
            res.send('Invalid credentials!')
        }
    }).catch(error => res.send('Invalid credentials'))
})

//This code creates my 'main' page.
app.get('/auth/main', (req,res) => {
    res.render('main')
})

//This code creates the 'add-post' page.
app.get('/auth/add-post', (req,res) => {
    res.render('add-post')
})

//This gives funtionality to the 'add-post' page.
app.post('/auth/add-post', (req,res) => {
    let title = req.body.postTitle
    let entry = req.body.postEntry

    db.none('INSERT INTO blogposts(title,entry,userid) VALUES($1,$2,$3)',[title,entry,req.session.user.userId]).then(() => {
        res.redirect('/auth/main') 
    })
})

//This code give functionality to the 'logout' button.
app.post('/auth/logout',(req,res) => {
    if(req.session) {
        req.session.destroy(error => {
            if(error) {
                next(error)
            } else {
                res.redirect('/login')
            }
        }) 
    }
})

//Without this line my program will not run.
app.listen(3000, () => {"Server is running..."})