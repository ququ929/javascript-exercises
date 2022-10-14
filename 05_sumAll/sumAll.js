const sumAll = function(number1, number2) {
    let large;
    let small;
    
    if (number1 < 0 || number2 < 0) return "ERROR";

    else if (typeof number1 !== "number" || typeof number2 !== "number") return "ERROR"

    else if (number1 > number2) {
        large = number1;
        small = number2;
    }
    else {
        large = number2;
        small = number1;
    }

    let sum = 0;

    for (let i = small; i <= large; i++) {
        sum += i;
    }

    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
