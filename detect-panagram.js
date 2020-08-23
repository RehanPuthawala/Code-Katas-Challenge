//* Instructions

/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

//* Solutions
// function isPangram(string) {
//   const lowercase = string.toLowerCase();
//   const arrOfStr = [];

//   for (let i = 0; i < lowercase.length; i++) {
//     arrOfStr.push(lowercase[i]);
//   }

//   if (
//     arrOfStr.includes("a") &&
//     arrOfStr.includes("b") &&
//     arrOfStr.includes("c") &&
//     arrOfStr.includes("d") &&
//     arrOfStr.includes("e") &&
//     arrOfStr.includes("f") &&
//     arrOfStr.includes("g") &&
//     arrOfStr.includes("h") &&
//     arrOfStr.includes("i") &&
//     arrOfStr.includes("j") &&
//     arrOfStr.includes("k") &&
//     arrOfStr.includes("l") &&
//     arrOfStr.includes("m") &&
//     arrOfStr.includes("n") &&
//     arrOfStr.includes("o") &&
//     arrOfStr.includes("p") &&
//     arrOfStr.includes("q") &&
//     arrOfStr.includes("r") &&
//     arrOfStr.includes("s") &&
//     arrOfStr.includes("t") &&
//     arrOfStr.includes("u") &&
//     arrOfStr.includes("v") &&
//     arrOfStr.includes("w") &&
//     arrOfStr.includes("x") &&
//     arrOfStr.includes("y") &&
//     arrOfStr.includes("z")
//   ) {
//     return true;
//   }

//   return false;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram("This is not a pangagram"));

// *2nd Solution

function isPangram(string) {
  const lowerCase = string.toLowerCase();

  return "abcdefghijklmnopqrstuvwxyz".split("").every((x) => {
    return string.indexOf(x) !== -1;
  });
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangagram"));
