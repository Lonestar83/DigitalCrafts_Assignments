//The following function checks to see whether or not a given word is a palindrome.
function palindromeCheck(word) {
    let reverse = ""
    for(let i = word.length -1; i >= 0; i--) {
        reverse += word[i];
    }
    if(word == reverse) {
        console.log(word + ' is a palindrome!');
    } else {
        console.log(word + ' is not a palindrome!')
    }
}

//let wordToCheck = window.prompt('Enter a word: ');
//palindromeCheck(wordToCheck);

//The following function removes duplicates from an array.
function removeDuplicates(arr) {
    arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if (!arr2.includes(arr[i])) {
            arr2.push(arr[i])
        }
    }
    return arr2
}

names = ["John","Mary", "Alex", "Steve", "Mary", "John"]
console.log(removeDuplicates(names))

//The following function checks to see if an item is in an array.
function checkArray(arr, item) {
    if (arr.inclues(item)) {
        console.log('This array contains ' + item)
    } else {
        console.log('This array does not contain ' + item)
    }
}

//The following function finds the largest number in an array.
function largestNumber(arr){
    largest = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

//The following function finds the smallest number in an array.
function smallestNumber(arr){
    smallest = arr[0]
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

//The following is a FizzBuzz exercise.
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if (i % 3 == 0 && i % 5 != 0) {
            console.log('Fizz')
        } else if (i % 3 != 0 && i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

//The following function determines whether a number is even or odd.
function oddOrEven(num){
    if(num % 2 == 0) {
        console.log(num + ' is an even number.')
    } else {
        console.log(num + ' is an odd number.')
    }
}

//The following function sorts numbers in an array in ascending and descending order.
function orderArray(arr){
    arr.sort(function(a,b){return a-b})
    console.log(arr)
    arr.sort(function(a,b){return b-a})
    console.log(arr)
}

array= [1,2,4,5,56,6]
orderArray(array)

const now = new Date()
console.log(now)