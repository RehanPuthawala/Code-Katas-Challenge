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
 }

console.log(cleanString("abc#d##c"));
