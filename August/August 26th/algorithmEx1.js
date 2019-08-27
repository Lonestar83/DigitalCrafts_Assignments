function arrayMaker(number){
    let arr = []
    let newNum = 0
    let place = 10
    let remainder;
    while(newNum == 0 || number % place != 0) {
        remainder = number % place
        arr.push(remainder)
        place *= 10
        number -= remainder
    }
    return arr
}

let arr2 = array_maker(2798729387492387)
console.log(arr2)