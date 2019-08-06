//First, I set my variables.
const express= require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

//This array will hold all tasks.
let tasks = []

//Middleware
app.use(cors())

//This sets up a body parser so it can parse the body of HTTP requests.
app.use(bodyParser.json())

//This creates a root URl.
app.get('/', (req, res) => {
    res.json({message:'Hello World!'})
})

//This adds a new task to the task array.
app.post('/tasks', (req, res) => {
    let taskTitle = req.body.taskTitle
    let priority = req.body.priority
    let dateCreated = req.body.dateCreated
    let dateCompleted = req.body.dateCompleted
    let status = req.body.status

    let tasks = {title: taskTitle, priority: priority, dateCreated: dateCreated, dateCompleted: dateCompleted, status: status}

    //Add task to tasks
    tasks.push(task)

    console.log(taskTitle)
    console.log(status)

    res.send('Task saved!')
})

app.get('/tasks', (re, res) => {
    res.json(tasks)
})

app.listen(3000, () => {
    console.log('Server is running...')
})