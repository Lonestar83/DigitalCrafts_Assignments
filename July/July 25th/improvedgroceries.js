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
        let groceryItems = store.groceries.map(grocery => { 
            return `<p><b>${store.grocery}</b></p>`
        }).join('')
        
        return `<div>
                <button onclick='deleteStore("${store.key}")'>Delete</button>
                ${store.name}: ${store.address}
                <input type="text" id="groceryTextBox" placeholder="Enter grocery item"></input>
                <button id="addGroceryButton" onClick=onclick='addHobby("${store.storeId}",this)'>Add Grocery</button>
                <div>${groceryItems}</div>
                </div>`

    })
    
    storeList.innerHTML = storeItems.join('')
    let addGroceryButton = document.getElementById("addGroceryButton")
  
}

addGroceryItem = (storeId) => {
    console.log(storeId)
    let storeRef = database.ref(`stores/${storeId}`)
    console.log(storeRef)
    let grocery = groceryTextBox.value
    store.addGroceries(grocery)
    clearGroceryTextBox()
}

function deleteStore(key) {
    storesRef.child(key).remove() 
}

function clearGroceryTextBox() {
    groceryTextBox.value = ""
}

addStoreButton.addEventListener('click',() => {
    let name = nameTextBox.value 
    let address = addressTextBox.value
    clearStoreTextBoxes() 
    saveStore(name, address)
})

function saveStore(name, address) {
    let store = new Store(name, address)
    storesRef.push(store)
}

function clearStoreTextBoxes() {
    nameTextBox.value = ""
    addressTextBox.value = ""
}

class Store {
    constructor(name, address) {
        this.name = name 
        this.address = address 
        this.userId = ''
        this.groceries = [] 
    }

    addGroceries(grocery) {
        this.groceries.push(grocery)
    }
}