//* Instructions

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

//* Solution

function firstNonRepeatingLetter(s) {
  let wordArr = s.split("");
  let repeatedWordArr = [];

  for (let i = 0; i < wordArr.length; i++) {
    for (let j = i + 1; j < wordArr.length; j++) {
      if (wordArr[i].toLowerCase() === wordArr[j].toLowerCase()) {
        repeatedWordArr.push(wordArr[i]);
      }
    }
    if (!repeatedWordArr.includes(wordArr[i])) return wordArr[i];
  }

  return "";
}

console.log(firstNonRepeatingLetter("aaa"));
