//* Instructions *//

/* 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

//* Solutions
function rot13(message) {
  let smallAlphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let bigAlphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let specialCharactersArr = "~^_+!*|,\":<>[]{}`';()@&$#%.".split("");
  let messageArr = message.split("");
  let outPutStr = "";

  for (let i = 0; i < messageArr.length; i++) {
    if (
      typeof messageArr[i] === "string" &&
      isNaN(parseInt(messageArr[i])) &&
      specialCharactersArr.includes(messageArr[i]) !== true
    ) {
      if (smallAlphabetArr.includes(messageArr[i])) {
        let letterDisFromLastElem =
          smallAlphabetArr.length -
          (smallAlphabetArr.indexOf(messageArr[i]) + 13);
        let letter =
          Math.sign(letterDisFromLastElem) === 1
            ? smallAlphabetArr[smallAlphabetArr.indexOf(messageArr[i]) + 13]
            : smallAlphabetArr[Math.abs(letterDisFromLastElem)];

        outPutStr += letter;
      } else {
        let letterDisFromLastElem =
          bigAlphabetArr.length - (bigAlphabetArr.indexOf(messageArr[i]) + 13);
        let letter =
          Math.sign(letterDisFromLastElem) === 1
            ? bigAlphabetArr[bigAlphabetArr.indexOf(messageArr[i]) + 13]
            : bigAlphabetArr[Math.abs(letterDisFromLastElem)];

        outPutStr += messageArr[i] === " " ? " " : letter;
      }
    } else {
      outPutStr += messageArr[i];
    }
  }

  return outPutStr;
}

console.log(rot13("10+2 is tweleve."));

//* Best Practices *//

//? Code 1*//
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message) {
  return message
    .split("")
    .map(function (c) {
      var i = alphabet.indexOf(c);
      if (i < 0) {
        // not in alphabet, return char
        return c;
      }

      return cipher[i];
    })
    .join("");
}

// Code 2 *//
var codeA = "A".charCodeAt(0),
  codeZ = "Z".charCodeAt(0),
  codea = "a".charCodeAt(0),
  codez = "z".charCodeAt(0);
function rot13(message) {
  return message
    .split("")
    .map(function (char) {
      var code = char.charCodeAt(0);
      if (codeA <= code && code <= codeZ) {
        return String.fromCharCode(((code - codeA + 13) % 26) + codeA);
      } else if (codea <= code && code <= codez) {
        return String.fromCharCode(((code - codea + 13) % 26) + codea);
      }
      return char;
    })
    .join("");
}
