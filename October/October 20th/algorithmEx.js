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