let dogImage = document.getElementById("dogImage")
let dogURL = "https://dog.ceo/api/breeds/image/random"

dogImage.addEventListener('load', () => {

    let dogURL = "https://dog.ceo/api/breeds/image/random"
    let req = new XMLHttpRequest()
    req.open('GET',dogURL)
    req.addEventListener('load',() => {
    let dog = JSON.parse(event.currentTarget.responseText)
    
    let dogItem =  `<img src='${dog}'</img>`

    dogImage.innerHTML = dogItem.join('')
    
    console.log(dog)

   
}) 
req.send() 
})