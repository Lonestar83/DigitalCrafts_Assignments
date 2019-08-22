let orderContainer = document.getElementById('orderContainer')

//This functions runs when the page is loaded.
let ordersURL = "https://quiet-escarpment-14753.herokuapp.com/api/orders/26"

async function doStuff() {
    let pendingOrders = await retrieveOrders(ordersURL)
    displayOrders(pendingOrders)
    console.log("Yay!")
}

doStuff()

//This code retrieves information from the API
async function retrieveOrders (ordersURL) {
    let response = await fetch(ordersURL) //makes touch with the URL
    let json = await response.json() //access the data at the URL
    let pendingOrders = (Object.values(json)) //makes array of info in json
    console.log(pendingOrders)
    console.log("Orders succssfully retrieved!")
    return pendingOrders
}

function displayOrders(pendingOrders) {
    let ordersToDisplay = pendingOrders[1].map(pendingOrder => {
        return `<div class="order">
                    <img src="${pendingOrder.imageUrl}"/>
                    <div class="orderInfo">
                        <span>Order: ${pendingOrder.name}</span>
                        <br/>
                        <span>Price: $${pendingOrder.price}.00</span>
                    </div>
                </div>`

    })
    orderContainer.innerHTML = ordersToDisplay.join("")
}
