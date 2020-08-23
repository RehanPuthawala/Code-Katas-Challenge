//To Do
// [] Create a function called likes which takes array as input
// [] Find the length of an array
// [] if arrays length is more than 4 then do other console.log

const names = ["Mo.Rehan", "Aadil Daruwala", "Mo.Zaid", "Nabil Ahmed"];

// function likes(names) {
//   // TODO
//   let length = names.length;
//   if (length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (length >= 4) {
//     return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
//   } else if (length === 1) {
//     return `${names[0]} likes this`;
//   } else {
//     return `no one likes this`;
//   }
// }

// let result = likes(names);
// console.log(result);

//** Refactored Code */

function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

let result = likes(names);
console.log(result);
