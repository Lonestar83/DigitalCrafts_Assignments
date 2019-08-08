const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser') 

const moviesRouter = require('./movies')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/movies', moviesRouter)




app.engine('mustache', mustacheExpress())
app.set('views', "./views")
app.set('view engine', 'mustache')

app.listen(3000, () => {
    console.log('Server is running...')
})