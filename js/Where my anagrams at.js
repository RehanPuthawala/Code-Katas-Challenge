//* Instrcutions

/*

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

*/

//* Examples

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

//* Solutions

function anagrams(word, words) {
  const wordArr = word.split("");
  const defaultObject = {};
  let finalArr = [];

  wordArr.forEach((letter) =>
    defaultObject[letter] === undefined
      ? (defaultObject[letter] = 1)
      : defaultObject[letter]++
  );

  for (let i = 0; i < words.length; i++) {
    let newArr = [];
    for (let j = 0; j < words[i].length; j++) {
      let count = 0;
      if (words[i].length === wordArr.length && wordArr.includes(words[i][j])) {
        for (let k = 0; k < words[i].length; k++) {
          if (words[i][j] === words[i][k]) count++;
        }
        if (defaultObject[words[i][j]] === count) newArr.push(words[i][j]);
      }
    }
    finalArr.push(newArr.join(""));
  }

  return finalArr.filter((value) => words.includes(value));
}

console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));

//* Best practice

// String.prototype.sort = function () {
//   return this.split("").sort().join("");
// };

// function anagrams(word, words) {
//   return words.filter(function (x) {
//     return x.sort() === word.sort();
//   });
// }
