//* Instructions

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

//* Examples

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//* Solutions
function duplicateCount(text) {
  let textArr = text.toLowerCase().split("");
  let repeatedWordArr = [];

  for (let i = 0; i < textArr.length; i++) {
    let repeatedTimes = 0;
    for (let j = i + 1; j < textArr.length; j++) {
      if (!repeatedWordArr.includes(textArr[i])) {
        if (textArr[i] === textArr[j]) repeatedTimes++;
      }
    }
    if (repeatedTimes >= 1) repeatedWordArr.push(textArr[i]);
  }

  return repeatedWordArr.length;
}

console.log(duplicateCount("RehanPuthawala"));
