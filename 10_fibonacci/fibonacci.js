const fibonacci = function(n) {
    n = +n; // accept string

    if (n < 0) return "OOPS";

    if (n === 0) return 0;
    
    let fibList = [1, 1];

    // add new element to the array, which equals to sum of last 2 number in the array.
    // loop for n - 2 times(we already have 2 element in list)
    for (let i = n - 2; i > 0; i--) {
        fibList.push(fibList.at(-1) + fibList.at(-2));
    }

    return fibList.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
