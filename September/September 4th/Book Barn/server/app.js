const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()) // enable cors 
app.use(express.json())

let books = [ // replace it with real database stuff 
    { title: "Book1" },
    { title: "Book2" }
]

// GET get all books
app.get('/books', (req, res) => {
    res.json(books)
})

// POST post book title to state
app.post('/books', (req, res) => {

    let title = req.body.title
    books.push({ title: title })// replace it with real database 

    res.json({ success: true })

})




app.listen(3001, () => {

})