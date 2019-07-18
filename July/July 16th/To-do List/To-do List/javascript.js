let addButton = document.getElementById("addButton")
let taskTextBox = document.getElementById("taskTextBox")
let pendingTasks = document.getElementById('pendingTasks')
let completedTasks = document.getElementById('completedTasks')

function clearTaskBar() {
    taskTextBox.value= ""
}

addButton.addEventListener('click', function() {
    let LiElement = document.createElement('li')
    
    let node = document.createElement("span")
    node.innerHTML = taskTextBox.value
    node.className = "label"
    clearTaskBar()

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkBox")
    checkbox.className = "checkBoxes"
    

    let delButton = document.createElement("button")
    delButton.innerHTML = "Remove"

    LiElement.append(checkbox)
    LiElement.append(node)
    LiElement.append(delButton)
    pendingTasks.append(LiElement)

    checkbox.addEventListener('click', function() {
        if(this.checked){
            completedTasks.append(LiElement)
        } else {
            pendingTasks.append(LiElement)
        }
    })
    delButton.addEventListener('click', function() {
        if(completedTasks.contains(LiElement)) {
            completedTasks.removeChild(LiElement)
        } else if(pendingTasks.contains(LiElement)) {
            pendingTasks.removeChild(LiElement)
        }  
    })
})