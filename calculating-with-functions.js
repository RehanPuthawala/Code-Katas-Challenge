// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(operator) {
  if (operator) {
    return operator + 0;
  }
  return 0;
}

function one(operator) {
  if (operator) {
    return operator + 1;
  }
  return 1;
}

function two(operator) {
  if (operator) {
    return operator + 2;
  }
  return 2;
}

function three(operator) {
  if (operator) {
    return operator + 3;
  }
  return 3;
}

function four(operator) {
  if (operator) {
    return operator + 4;
  }
  return 4;
}

function five(operator) {
  if (operator) {
    return operator + 5;
  }
  return 5;
}

function six(operator) {
  if (operator) {
    return operator + 6;
  }
  return 6;
}

function seven(operator) {
  if (operator) {
    return operator + 7;
  }
  return 7;
}

function eight(operator) {
  if (operator) {
    return operator + 8;
  }
  return 8;
}

function nine(operator) {
  if (operator) {
    return operator + 9;
  }
  return 9;
}

//* Operators Function *//

function add(number) {
  return `+ ${number}`;
}

function multiply(number) {
  return `/ ${number}`;
}

function divide(number) {
  return `* ${number}`;
}
function substract(number) {
  return `- ${number}`;
}
