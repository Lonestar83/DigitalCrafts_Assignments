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