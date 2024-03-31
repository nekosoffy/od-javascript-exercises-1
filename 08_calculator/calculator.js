const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for (let num of array) {
    total *= num;
  }
  return total;
};

const power = function(num, exponent) {
  return num ** exponent;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let total = num;
  for (let i = num - 1; i >= 1; i--) {
    total *= i;
  }
  return total;
};

console.log(factorial(3));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
