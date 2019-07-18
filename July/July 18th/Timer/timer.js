let startButton = document.getElementById("startButton")
let timeTextBox = document.getElementById("timeTextBox")
let displaybox = document.getElementById("displaybox")

function clearTaskBar() {
    timeTextBox.value= ""
}

startButton.addEventListener('click', () => {

    seconds = timeTextBox.value
    clearTaskBar()
    
    displaybox.innerHTML = `<div>${seconds} seconds left!</div>`
    seconds -= 1;

    let myVar = setInterval(() => {
        if(seconds > 1) {
            timeQuote = `<div>${seconds} seconds left!</div>`
            seconds -= 1
        } else if (seconds == 1) {
            timeQuote = `<div>${seconds} second left!</div>`
            seconds -= 1
        } else {
            timeQuote = `<div>Time's Up!</div>`
        }
        displaybox.innerHTML = timeQuote
    },1000)

    window.setTimeout(function(){
        clearInterval(myVar)
    }, ((seconds + 1) * 1000))
})
