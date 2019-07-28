let dogImage = document.getElementById("dogImage")
let dogButton = document.getElementById("dogButton")

dogButton.addEventListener('click', () => {

    let dogURL = `https://dog.ceo/api/breeds/image/random`
    let req = new XMLHttpRequest()
    req.open('GET',dogURL)
    req.addEventListener('load',() => {
    let dog = JSON.parse(event.currentTarget.responseText)
    let dogItem = `<img src='${dog.message}'/>`
    dogImage.innerHTML = dogItem
    })
req.send() 
})