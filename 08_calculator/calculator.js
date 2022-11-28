const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  // reduce method:
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//   for of method:  
//   let total = 0;
//   for (let n of numbers) {
//     total += +n;
//   }
//   return total;
};

const multiply = function(numberArray) {
  return numberArray.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  if (n === 0) return 1;
  
  else {
    const index = [...Array(n).keys()];
    const numbers = index.map(n => n + 1);
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
