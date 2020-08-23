//* Instructions

/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

//* Solutions

function high(x) {
  const xArr = x.split(" ");
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");

  let word;
  let longestWordPoint = 0;

  for (let i = 0; i < xArr.length; i++) {
    let wordPoint = 0;
    for (let j = 0; j < xArr[i].length; j++) {
      wordPoint = wordPoint + alphabetArr.indexOf(xArr[i][j]) + 1;
      if (wordPoint > longestWordPoint) {
        longestWordPoint = wordPoint;
        word = xArr[i];
      }
    }
  }

  return word;
}

// console.log(high("man i need a taxi up to ubud"));
console.log(high("man i need a taxi up to ubud"));
