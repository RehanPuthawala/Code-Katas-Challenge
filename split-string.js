//* Instructions

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//* Examples

// olution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

//* Solutions

function solution(str) {
  let strArr = str.split("");
  let resultArr = [];

  for (let i = 0; i < strArr.length; i += 2) {
    strArr[i + 1]
      ? resultArr.push(`${strArr[i]}${strArr[i + 1]}`)
      : resultArr.push(`${strArr[i]}_`);
  }
  return resultArr;
}

console.log(solution("abcdef"));
