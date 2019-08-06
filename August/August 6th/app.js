//First, I set up my variables.
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded())

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

//This function creates the 'add-trip' page.
app.get('/add-trip',(req,res) => {
    res.render('addTrip')
})

//This function retrieves information from the 'add-trip' page, adds a trip to the array of trips, and redirects the user to the trips page.
app.post('/add-trip',(req,res) => {
    let tripTitle = req.body.tripTitle
    let imageURL = req.body.imageURL
    let departureDate = req.body.departureDate
    let returnDate = req.body.returnDate

    let trip = {title: tripTitle, image: imageURL, departureDate: departureDate, returnDate: returnDate}
    trips.push(trip)

    res.redirect('/trips')
})

//This funtion will return users back to the 'add-trip' page.
app.post('/return', (req, res) => {
    res.redirect('/add-trip')
})

//This function will delete a trip.
app.post('/delete-trip', (req, res) => {
    let tripTitle = req.body.tripTitle
    trips = trips.filter(trip => {
        return trip.title != tripTitle
    })

    res.redirect('/trips')
})

//This funtion creates a 'trips' page on which my trips will be displayed.
app.get('/trips',(req,res) => {
     res.render('trips',{trips: trips})
 })

app.listen(3000, () => {
    console.log('Server is running...')
})