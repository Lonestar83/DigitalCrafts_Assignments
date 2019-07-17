let dishSelector = document.getElementById("dishSelector")
let dishList = document.getElementById("dishList")

dishSelector.addEventListener('change', () => {
    newDishes = dishes
    console.log(dishSelector.value)
    if(dishSelector.value == "Starters") {
        newDishes = dishes.filter(dish => dish.course == "Starters")
    } else if(dishSelector.value == "Entrees") {
        newDishes = dishes.filter(dish => dish.course == "Entrees")
    } else if(dishSelector.value == "Desserts") {
        newDishes = dishes.filter(dish => dish.course == "Desserts")
    } else {
        newDishes = dishes
    }
    console.log(newDishes)

   

    let dishDiv = newDishes.map(newDish => {

        let dishDiv = `<div class="dishItem">
                            <img src='${newDish.imageURL}'></img>
                            <div class="dishInfo">
                                <div class="dishTitle">
                                    <span class="dishName">${newDish.title}</span>
                                    <span class=>${newDish.price}</span>
                                </div>
                                <br>
                                <span class="description">${newDish.description}</span>
                            </div>    
                        </div>`

        return dishDiv
    })


    dishList.innerHTML = dishDiv.join('')
})


function populateDishes() {

    let dishDiv = dishes.map(dish => {

        let dishDiv = `<div class="dishItem">
                            <img src='${dish.imageURL}'></img>
                            <div class="dishInfo">
                                <div class="dishTitle">
                                    <span class="dishName">${dish.title}</span>
                                    <span class=>${dish.price}</span>
                                </div>
                                <br>
                                <span class="description">${dish.description}</span>
                            </div>    
                        </div>`

        return dishDiv
    })


    dishList.innerHTML = dishDiv.join('')

}

populateDishes() 