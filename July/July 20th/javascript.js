let btnColor = document.getElementById("btnColor")
let thebody = document.getElementById("thebody")
let greeting = document.getElementById("greeting")

function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

btnColor.addEventListener('click', () => {
    randomHex = Math.random().toString(16).substr(-6)
    thebody.style.backgroundColor = randomHex
    greeting.style.color = invertHex(randomHex)
})
