//* Instructions

/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols./*

//* Examples
/* "abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""*/

//* Solutions

function cleanString(s) {
  let strArr = s.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "#") {
      strArr[i] = null;
      let goBackNum = 1;
      while (strArr[i - goBackNum] === null) goBackNum++;
      strArr[i - goBackNum] = null;
    }
  }
  return strArr.filter((str) => str !== null).join("");
}

console.log(cleanString("Re#h#a##n"));
console.log(cleanString("Re#h#a##n"));

function cleanString(s) {
  return s
    .split("")
    .map((value, idx, arr) => {
      if (value === "#") {
        value = null;
        let goBackNum = 1;
        while (arr[idx - goBackNum] === null) goBackNum++;
        strArr[idx - goBackNum] = null;
      } else {
        return value;
      }
    })
    .filter((value) => value !== null);
}
