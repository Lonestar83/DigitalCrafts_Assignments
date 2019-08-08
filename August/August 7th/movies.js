const express = require('express')
const router = express.Router()

let movies = []

//localhost:3000/movies
router.get('/', (req,res) => {
    console.log(movies)
    res.render('movies', {movies: movies})
})

//localhost:3000/movies/add-movie
router.get('/add-movie', (req,res) => {
    res.render('add-movie')
})

//This function retrieves information from the 'add-trip' page, adds a trip to the array of trips, and redirects the user to the trips page.
router.post('/add-movie',(req,res) => {
    let movieTitle = req.body.movieTitle
    let description = req.body.description
    let genre = req.body.genre
    let posterURL = req.body.posterURL

    let movie = {title: movieTitle, description: description, genre: genre, poster: posterURL}
    movies.push(movie)

    res.redirect('/movies')
})

router.post('/delete-movie', (req,res) => {
    let movieTitle = req.body.movieTitle
    console.log(movieTitle)
    movies = movies.filter(movie => {
        return movie.title != movieTitle
    })

    res.redirect('/movies')
})

router.post('/return', (req, res) => {
    res.redirect('/movies/add-movie')
})

router.get('/genre/:genre', (res,req) => {
    res.render('movies', {movies: movies})
})

router.get('/:title', (res,req) => {
    res.render(':title', {movies: movies.title})
})

module.exports = router