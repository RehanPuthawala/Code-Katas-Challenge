// * Instructions

//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//* Exmaple
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//* Solution

// var moveZeros = function (arr) {
//   let finalArr = arr.filter((value) => value !== 0);
//   let zeroArr = arr.filter((value) => value === 0);

//   zeroArr.forEach((zero) => {
//     finalArr.push(zero);
//   });

//   return finalArr;
// };

//* Best Practice

var moveZeros = function (arr) {
  return arr
    .filter((value) => value !== 0)
    .concat(arr.filter((value) => value === 0));
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
