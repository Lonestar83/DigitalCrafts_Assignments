//First, I set my variables.
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const session = require('express-session')
const Trip = require('./models/trips')
const path = require('path')
const VIEWS_PATH = path.join(__dirname,'/views')

//This code initializes sessions.
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

//Then, I set up my middleware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/static', express.static(__dirname + '/static'))

//This line of code keeps users from viewing 'trip' pages without logging in.
app.all('/trips/*',authenticate)

//Next, I set up my engine, letting the program know where to find my mustache files.
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', "./views")
app.set('view engine', 'mustache')

//This code sets up an empty array of users.
let users = [{username: 'johndoe', password: 'password'}]
let trips = []



//This code creates an authentication middleware. 
function authenticate(req,res,next) {
    if(req.session) {
        if(req.session.username) {
            // perform the original request 
            next()
        } else {
            res.redirect('/login')
        }
    }
}

//This creates a 'register' page.
app.get('/register', (req,res) => {
    res.render('register')
})

//This code allows users to register.
app.post('/register',(req,res) => {
    let username = req.body.userName 
    let password = req.body.userPassword 

    let user = {username: username, password: password}

    users.push(user)

    res.redirect('/login')
})

//This code creates a 'login' page.
app.get('/login',(req,res) => {
    res.render('login')
})

//This code allows users to log in.
app.post('/login',(req,res) => {
    let userName = req.body.userName 
    let userPassword = req.body.userPassword 

    let persistedUser = users.find(user => {
        return user.username == userName && user.password == userPassword
    })

    if(persistedUser) {
        // user is authenticated successfully 
        if(req.session) {
            req.session.username = persistedUser.username
            // where should we redirect 
            res.redirect('/trips/my-trips') 
        }
    } else {
        // user is not authenticated successfully 
        res.render('login',{message: 'Invalid username or password'})
    }
})

//This code creates a 'my-trips' page.
app.get('/trips/my-trips', (req,res) => {
    res.render('my-trips',{trips: trips})
})

//This code creates an 'add-trip' page.
app.get('/trips/add-trip', (req,res) => {
    res.render('add-trip')
})

//This code allows users to enter a new trip.
app.post('/trips/add-trip',(req,res) => {
    let tripTitle = req.body.tripTitle 
    let imageURL = req.body.imageURL 
    let departureDate = req.body.departureDate
    let returnDate = req.body.returnDate 

    let trip = new Trip(tripTitle, imageURL, departureDate, returnDate)
    trips.push(trip)

    res.redirect('/trips/my-trips')
})

//This creates a delete-trip page.
app.get('/trips/delete-trip',(req,res) => {
    res.render('delete-trip')
})

//This gives functionality to the 'delete' button.
app.post('/trips/delete-trip', (req, res) => {
    let tripTitle = req.body.tripTitle
    trips = trips.filter(trip => {
        return trip.tripTitle != tripTitle
    })
    res.redirect('/trips/my-trips')
})

//This 
app.post('/trips/logout',(req,res) => {
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

//Without this function I won't be able to tell if the server's running!
app.listen(3000, () => {
    console.log('Server is running...')
})