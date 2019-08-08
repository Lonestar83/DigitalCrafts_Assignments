//First, I set up my variables.
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

const tripsRouter = require('./routes/trips')

app.use('/trips', tripsRouter)

//I then tell express to use the mustache templating engine.
app.engine('mustache', mustacheExpress())
//These pages are located in the 'views' directory.
app.set('views', './views')
//I then set the extension to .mustache.
app.set('view engine', 'mustache')

//This sets up an array of users
let trips = []

//This function creates the 'index' page.
app.get('/', (req, res) => {
    res.render('index', {})
})

app.listen(3000, () => {
    console.log('Server is running...')
})