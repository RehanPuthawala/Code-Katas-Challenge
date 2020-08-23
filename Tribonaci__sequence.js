//! Instructions

// well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

//! 1st Attempt
// const arr = [1, 1, 1];

// function Tribonacci(signature, n) {
//   let results = [...signature];
//   console.log(results);
//   for (let i = 0; i < n - results.length; i++) {
//     results.push(
//       results[results.length - 1] +
//         results[results.length - 2] +
//         results[results.length - 3]
//     );
//   }
//   return results;
// }

// const finalAnswer = Tribonacci(arr, 7);
// console.log(finalAnswer);

//! 2nd Attempt
const arr = [1, 1, 1];

function Tribonacci(signature, n) {
  let total = 0;

  for (let i = signature.length; i > 0; i++) {
    total += signature[i];

    for (let j = 0; j < n; j++) {
      signature.push(total);
    }
  }
  return signature;
}

const finalAnswer = Tribonacci(arr, 10);
console.log(finalAnswer);
