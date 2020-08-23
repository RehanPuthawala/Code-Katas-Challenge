//* Instructions

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

//* Example

// For example, take 153 (3 digits):
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1634 (4 digits):
// 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

//* Output
// true or fasle

//!Solution

function narcissistic(value) {
  let valueStr = value.toString();
  let valueStrLength = valueStr.length;
  let total = 0;

  for (let i = 0; i < valueStrLength; i++) {
    total = total + Math.pow(parseInt(valueStr[i]), valueStrLength);
  }
  return total === value ? true : false;
}

console.log(narcissistic(7));

//! Best Practice

function narcissistic(value) {
  let result = value
    .toString()
    .split("")
    .reduce((accum, el) => accum + Math.pow(el, value.toString().length), 0);

  return result === value;
}

console.log(narcissistic(153));
