//* Instructions
/* 
Sparse arrays in JavaScript are useful for many things. Among others they can be used for splitting an array into subarrays. Your task here is to create an array method for splitting a sparse array to subarrays, each of which must not be a sparse array.

It will act a bit similarly to the .split() method in strings. The new array method will return an array of subarrays, if the original array is a sparse array. Otherwise it will return the original array.
For example: [1,2,,3,4].split() will return [[1,2],[3,4]], and [,,,,].split() will return []. Please note that nested sparse arrays should remain sparse: [,,[,,],[,,],,].split() should return [[[,,],[,,]]].
*/

//* Examples

// [1,2,3,4,5] => should return same array
// [1,2,,3,4,5] => [[1,2], [3,4,5]]

//* Solutions

const example = [1, 2, , 3, 4, 5];
const arr = [1, 2, 3, , 4, , 5, , 6, , 7, , 8];
const perfectArr = [1, 2, 3, 4, 5, 6];

// Array.prototype.split = function () {
//   let parsedArr = [];
//   let finalArr = [];
//   let emptyArr = { arr: [], key: [0], length: [] };

//   for (let i = 0; i < this.length; i++) {
//     if (this[i] !== undefined) {
//       parsedArr.push(this[i]);
//     } else {
//       emptyArr.arr.push(this[i]);
//       emptyArr.key.push(i);
//       emptyArr.length.push(this.length - i - 2);
//     }
//   }

//   if (emptyArr.arr.length) {
//     for (let i = 0; i < emptyArr.key.length; i++) {
//       let newArr = [];
//       if (i === 0) {
//         for (let j = emptyArr.key[i]; j < emptyArr.key[i + 1]; j++) {
//           newArr.push(parsedArr[j]);
//         }
//       } else if (i !== emptyArr.key.length - 1) {
//         let count = emptyArr.key[i + 1] - emptyArr.key[i];
//         if (count > emptyArr.key[i]) {
//           for (
//             let k = emptyArr.key[i] - 1;
//             k < emptyArr.key[i + 1] - emptyArr.key[i];
//             k++
//           ) {
//             newArr.push(parsedArr[k]);
//           }
//         } else {
//           for (
//             let k = emptyArr.key[i] + 1;
//             k < emptyArr.key[i + 1] - emptyArr.key[i] + emptyArr.key[i];
//             k++
//           ) {
//             newArr.push(this[k]);
//           }
//         }
//       } else if (i === emptyArr.key.length - 1) {
//         for (let r = emptyArr.key[i] + 1; r < this.length; r++) {
//           newArr.push(this[r]);
//         }
//       }
//       finalArr.push(newArr);
//     }
//     return finalArr;
//   }

//   return this;
// };

// // console.log(arr.split());
// // console.log(example.split());
// console.log(perfectArr.split());

//* Best Practice

Array.prototype.split = function () {
  const res = [];
  let tmp = [],
    change = 0;
  for (let i = 0; i < this.length; i++) {
    if (i in this) tmp.push(this[i]);
    else if (tmp.length) res.push(tmp), (tmp = []);
    if (!(i in this)) change = 1;
  }
  if (tmp.length) res.push(tmp);
  return change ? res : this;
};
