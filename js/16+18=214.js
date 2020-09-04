//* Instructions
/* For this Kata you will have to forget how to add two numbers together.
The best explanation on what to do for this kata is this meme :
In simple terms our method does not like the principle of carrying over numbers and just writes down every number it calculates.
You may assume both integers arepositive integersand the result will not be bigger than Integer.MAX_VALUE (only for java) */

//* Examples

/*
add(2, 11), 13;
add(0, 1), 1;
add(0, 0), 0;

add(16, 18), 214;
add(26, 39), 515;
add(122, 81), 1103;

add(1222, 30277), 31499;
add(1236, 30977), 31111013;
add(38810, 1383), 391193;
add(49999, 49999), 818181818; */

//* Solutions
function add(num1, num2) {
  let smallerNumber = num1 < num2 ? num1 : num2;
  let biggerNumber = num1 > num2 ? num1 : num2;
  let smallerNumberArr = smallerNumber.toString().split("").reverse();
  let biggerNumberArr = biggerNumber.toString().split("").reverse();
  let resultArr = [];

  for (let i = 0; i < biggerNumberArr.length; i++) {
    if (isNaN(parseInt(biggerNumberArr[i]) + parseInt(smallerNumberArr[i])))
      smallerNumberArr[i] = String(0);
    resultArr.push(
      parseInt(biggerNumberArr[i]) + parseInt(smallerNumberArr[i])
    );
  }
  return resultArr.reverse().join("");
}

console.log(add(2, 14));
