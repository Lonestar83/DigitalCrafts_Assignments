function turnOnOff(lightOn) {
    let lightbulb = document.getElementById('lightbulb')
    if(lightbulb.src.match("ONbulb.jpeg")) { 
        lightbulb.src = "OFFbulb.jpeg"
        console.log("Off")
    } else {
        lightbulb.src = "ONbulb.jpeg"
        console.log("On")
    }
}