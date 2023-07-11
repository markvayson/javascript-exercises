const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};
const sum = function (obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

const multiply = function (...numbers) {
  let mul = numbers.reduce((total, num) => total * num, 1);
  return mul;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (num) {
  let result = 1;
  if (num === 0 || num === 1) {
    return result;
  }
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
