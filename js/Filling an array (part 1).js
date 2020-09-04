//* Instructions

/* 
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:
*/

//* Examples
// arr(5) // => [0,1,2,3,4]

//* Solutions

// const arr = (N) => {
//   let finalArr = [];
//   for (let i = 0; i < N; i++) {
//     finalArr.push(i);
//   }

//   return finalArr;
// };

// console.log(arr(5));

//* Best Practice

const arr = (N) => Array.from({ length: 5 }, (x, i) => i);

console.log(arr(5));
