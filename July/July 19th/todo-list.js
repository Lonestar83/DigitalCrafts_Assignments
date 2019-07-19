$(document).ready(() => {
    
    let taskTextBox = $("#taskTextBox") 
    let btnAdd = $("#btnAdd")
    let pendingtasks = $("#pendingtasks")
    let completedtasks = $("#completedtasks")


    $("#btnAdd").click(() => {

        let title = taskTextBox.val()
        $('#taskTextBox').val("")

        let checkBox = $('<input type="checkbox" />')
        checkBox.click(() => {
            if(checkBox.is(":checked")){
                completedtasks.append(checkBox.parent())
            } else {
                pendingtasks.append(checkBox.parent())
            }    
        })
        
        let taskItemDiv = $("<div>")
        taskItemDiv.attr("id", "taskItemBox")
        
        let removeBtn = $('<button>Remove</button>')
        removeBtn.attr("id", "removeBtn")
        removeBtn.click(() => {
            removeBtn.parent().remove()
        })
        
        taskItemDiv.append(checkBox)
                    .append(`<label>${title}</label>`)
                    .append(removeBtn)
        
        pendingtasks.append(taskItemDiv)
        
        
    })
})