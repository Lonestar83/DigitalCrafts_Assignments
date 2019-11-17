import { isPrivateName } from "@babel/types";

function sumAll(x,y) {
    let min = Math.min(x,y)
    let max = Math.max(x,y)
    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum = sum + i;
    }
    return sum
}

console.log(sumAll(4,1))

function smallestCommons(arr) {
    function findDiv(num) {
        for(let i = 2; i <= num; i++) {
            let divArray = []
            if(num % i === 0) {
                divArray.push(i)
            }
            return divArray
        }
    arr.sort()
    let array1 = findDiv(arr[0]);
    let array2 = findDiv(arr[1]);
    let minDiv = 1
    for(let j = 0; j < array1.length; j++) {
        if(array1[j] == array2[j]) {
            minDiv = array1[j]
            return
        }
    }
    return minDiv
    }
}

console.log(smallestCommons([14, 72]))

function uniteUnique(arr) {
    let newArr=[]
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                if(!newArr.includes(arr[i][j])) {
                    newArr.push(arr[i][j])
                }
            }
        }
    return newArr
}

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

function anagramCheck(str1, str2) {
    let aString = cleanString(str1);
    let bString = cleanString(str2);

    if(aString === bString) {
        return true;
    } else {
        return false;
    }
}

function cleanString(str) {
    return str.replace(/[^\w]/g,'').split().sort().join()
}

function vowels(str) {
    const matches = str.match(/[aeious]/gi);
    return matches ? matches.length : 0
}

function capitalize(str) {
    const words = [];

    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

function fib(n) {
    if (n > 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i -1); j++) {
            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arrr[i] = lesser;
        }
    }

    return arr;
}

function maxChar(str) {
    const charMap = {};
    
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    console.log(charMap)
}

var arr = [1,2,3,4]
var reversedArr = reverseArray(arr);

function reverseArray(arr) {
    var newArr = [];
    console.log(newArr);
    if(!arr.length) {
       return newArr;
    } else {
        return newArr.concat(reverseArray(arr.slice(1)), arr[0]);
    }
}

let caesarCipher = (str, key) => {
    return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
}

var caesarShift = function(str, amount) {
	if (amount < 0)
		return caesarShift(str, amount + 26);
	var output = '';
	for (var i = 0; i < str.length; i ++) {
		var c = str[i];
		if (c.match(/[a-z]/i)) {
			var code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		output += c;
	}
	return output;
};

function sumPrimes(num) {
    let total = 0;
    for (let j = 1; j <= num; j++) {
        if (isPrime(j)) {
            total += j;
        }
    }
    return total;
}

function isPrime(number) {
    let prime = true;
    for (let i = 2; i < Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            return prime = false;
        }
    }
    return prime;
}

const largestPrime = num => {
    let primes = []
    function primeFinder(x) {
        let isPrime = true;
        for (let i = 2; i < Math.floor(Math.sqrt(x)); i++) {
            if (x % i === 0) {
                return isPrime = false;
            }
        }
        return isPrime;
    }
    for (let j = 1; j < num; j++) {
        if(primeFinder(j)) {
            primes.push(j)
        }
    }
    return (primes[primes.length -1])
}

function validate(phone) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone)
}

function romanNumeral(num) {
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        while (num%decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
}

function arrayOfMultipes(num, length) {
    let array = []
    for(let i = 1; i <= length; i++) {
        array.push(num * i)
    }
    return array
}