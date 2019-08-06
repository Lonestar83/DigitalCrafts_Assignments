fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(json => console.log(json))

let taskTitle = 'Wash dishes'
let priority = 'high'

fetch(`http://localhost:3000/tasks/${taskTitle}/priority/${priority}`)