let nameTextBox = document.getElementById("nameTextBox")
let addressTextBox = document.getElementById("addressTextBox")
let addStoreButton = document.getElementById("addStoreButton")
let storeList = document.getElementById("storeList")

let storesRef = database.ref('stores')

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

storesRef.on('value',(snapshot) => {

    stores = [] 

    snapshot.forEach(item => {

        let storeItem = item.val() 
        let store = new Store(storeItem.name, storeItem.address)
        store.storeId = store.key // unique key from firebase database 
        store.groceries = storeItem.groceries
        stores.push(store) // adding to an array 
    })

    displayStores(stores)

})

function displayStores(stores) {

    let storeItems = stores.map(store => {  
        let groceryItems = store.groceries.map(grocery => { 
            return `<p><b>${grocery}</b></p>`
        }).join('')
        
        return `<div>${store.name}
                 <input type="text" />        <button onclick='addGrocery("${store.storeId}",this)'>Add Grocery Item</button>     
                 ${groceryItems}
                </div>`
    })

    storeList.innerHTML = storeItems.join('')
}


function addGrocery(storeId,obj) {
    
    console.log(storeId)
    let store = stores.find( u => u.storeId == storeId)

    let groceryName = obj.previousElementSibling.value
    store.addGrocery(new Grocery(groceryName))
    storeRef.child(storeId).set(store)
}

class Grocery {
    constructor(grocery) {
        this.grocery = grocery 
    }
}

function clearStoreTextBox() {
    nameTextBox.value = ""
    addressTextBox.value = ""
}