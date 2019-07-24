let nameTextBox = document.getElementById("nameTextBox")
let addressTextBox = document.getElementById("addressTextBox")
let addStoreButton = document.getElementById("addStoreButton")
let storeList = document.getElementById("storeList")


let storesRef = database.ref('stores')

storesRef.on('value',(snapshot) => {

    let stores = [] 
    console.log("VALUE CHANGED EVENT OCCURED")
    console.log(snapshot.val())
    for(key in snapshot.val()) {
        console.log(snapshot)
        let store = snapshot.val()[key]
        store.key = key 
        stores.push(store)
    }
    displayStores(stores)
})

function displayStores(stores) {
    let storeItems = stores.map(store => {
        return `<div>
                <button onclick='deleteStore("${store.key}")'>Delete</button>
                ${store.name}: ${store.address}
                <input type="text" id="groceryTextBox" placeholder="Enter grocery item"></input>
                <input type="text" id="quantityTextBox" placeholder="Enter quantity"></input>
                <button onclick = 'addItemToList("${store.key}")' id="addGroceryButton">Add Grocery</button>
                <div id="groceryList"><div>
                </div>`
    })

    storeList.innerHTML = storeItems.join('')
    let addGroceryButton = document.getElementById('addGroceryButton')
    let groceryList = document.getElementById('groceryList')
}

function deleteStore(key) {
    storesRef.child(key).remove() 
}

addStoreButton.addEventListener('click',() => {
    let name = nameTextBox.value 
    let address = addressTextBox.value
    clearStoreTextBoxes() 
    saveStore(name, address)
})


addItemToList = (id) => {
    console.log(id)
    let groceryTextBox = document.getElementById("groceryTextBox")
    let quantityTextBox = document.getElementById("quantityTextBox")
    let groceryName = groceryTextBox.value 
    let groceryQuantity = quantityTextBox.value
    clearGroceryTextBoxes() 
    saveGrocery(groceryName, groceryQuantity, id)
}

function saveStore(name, address) {
    storesRef.push({ 
    name: name, 
    address: address
})
}

function clearStoreTextBoxes() {
    nameTextBox.value = ""
    addressTextBox.value = ""
}

function clearGroceryTextBoxes() {
    groceryTextBox.value = ""
    quantityTextBox.value = ""
}


function saveGrocery(groceryName, groceryQuantity, storeId) {
    let groceryRef = database.ref(`stores/${storeId}/items`)
    console.log(groceryName, groceryQuantity)
    groceryRef.push({
        groceryName: groceryName,
        groceryQuantity: groceryQuantity
    })
}

groceryRef.on('value',(snapshot) => {
     let groceries = [] 
     console.log("VALUE CHANGED EVENT OCCURED")
     for(key in snapshot.val()) {
         let groceryItem = snapshot.val()[key][items]
         groceryItem.key = key 
         groceries.push(groceryItem)
     }
     displayGroceries(groceries)
})



function displayGroceries(groceries) {
    let groceryThings = groceries.map(grocery => {
        return `<div>
                <button onclick='deleteGrocery("${grocery.key}")'>Delete</button>
                ${grocery.groceryName}: ${grocery.groceryQuantity}
                </div>`
    })

    groceryList.innerHTML = groceryThings.join('')
}

function deleteGrocery(key) {
    groceryRef.child(key).remove() 
}