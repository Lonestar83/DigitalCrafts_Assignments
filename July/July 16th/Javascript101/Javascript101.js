function sum(a,b) {
    let result = a + b;
    if (result >= 50 && result <= 80) {
        return 80;
    } else {
        return 65;
    }
}

num = sum(40,53);
console.log(num)