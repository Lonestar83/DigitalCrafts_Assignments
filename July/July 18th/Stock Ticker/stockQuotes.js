let enterButton = document.getElementById("enterButton")
let symbolTextBox = document.getElementById("symbolTextBox")
let displaybox = document.getElementById("displaybox")

function clearTaskBar() {
    symbolTextBox.value= ""
}

enterButton.addEventListener('click', () => {

    symbol = symbolTextBox.value.toUpperCase()
    clearTaskBar()
    
    window.setInterval(() => {
        let quote = getStockQuote(symbol)
        stockQuote = `<div>${symbol} price is ${quote.price}</div>`
        displaybox.innerHTML = stockQuote
    },2000)
})
