const express = require('express')
const router = express.Router()


//This funtion creates a 'trips' page on which my trips will be displayed.
router.get('/',(req,res) => {
    res.render('trips',{trips: trips})
})

//This function creates the 'add-trip' page.
router.get('/add-trip',(req,res) => {
    res.render('addTrip')
})

//This function retrieves information from the 'add-trip' page, adds a trip to the array of trips, and redirects the user to the trips page.
router.post('/add-trip',(req,res) => {
    let tripTitle = req.body.tripTitle
    let imageURL = req.body.imageURL
    let departureDate = req.body.departureDate
    let returnDate = req.body.returnDate

    let trip = {title: tripTitle, image: imageURL, departureDate: departureDate, returnDate: returnDate}
    trips.push(trip)

    res.redirect('/trips')
})

//This function will delete a trip.
router.post('/delete-trip', (req, res) => {
    let tripTitle = req.body.tripTitle
    trips = trips.filter(trip => {
        return trip.title != tripTitle
    })

    res.redirect('/trips')
})

//This funtion will return users back to the 'add-trip' page.
router.post('/return', (req, res) => {
    res.redirect('/add-trip')
})

module.exports = router