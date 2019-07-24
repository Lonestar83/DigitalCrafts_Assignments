let orderList = document.getElementById("orderList")
let coffeeTypeBox = document.getElementById("coffeeTypeBox")
let emailAddressBox = document.getElementById("emailAddressBox")
let submitButton = document.getElementById('submitButton')

let coffeeURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

fetch(coffeeURL)
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    emailAddresses = Object.keys(json)
    let literalArray = emailAddresses.map((email) => {
        let order = json[email]
        console.log(order)           
        return `<div class="orderInfo">
                    <span><b>Order: </b>${order.coffee}</span>
                    <span><b>Email Address: </b>${order.emailAddress}</span>
                    <span><b>Order ID: <b/>${order._id}</span>
                </div>`
    })
    orderList.innerHTML = literalArray.join('')
  })

  submitButton.addEventListener('click', () => {
    console.log('clicked')
    let submittedCoffeeType = coffeeTypeBox.value
    let submittedEmailAddress= emailAddressBox.value
    console.log(submittedCoffeeType, submittedEmailAddress)

    fetch(coffeeURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailAddress: submittedEmailAddress,
            coffee: submittedCoffeeType
        })
    })
    .then(res => {})
    .catch(error => console.log(error))
  })
