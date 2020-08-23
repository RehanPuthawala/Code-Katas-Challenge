//* Instructions

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

//* Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//* Solutions
function order(words) {
  let wordArr = words.split(" ");
  let sortedArr = [];

  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < wordArr[i].length; j++) {
      if (parseInt(wordArr[i][j]))
        sortedArr[parseInt(wordArr[i][j]) - 1] = wordArr[i];
    }
  }

  return sortedArr.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));

//* Solution No ; 2

function orderWithForEach(words) {
  let wordArr = words.split(" ");
  let sortedArr = [];

  wordArr.forEach((word) => {
    let letterArr = word.split("");
    letterArr.forEach((letter) => {
      if (parseInt(letter)) sortedArr[parseInt(letter) - 1] = word;
    });
  });

  return sortedArr.join(" ");
}

console.log(orderWithForEach("is2 Thi1s T4est 3a"));
console.log(orderWithForEach("e2 R1 a4 n5 h3"));
