//* Instructions

/* Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers. */

//* Test Cases

/* digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 */

//* Solutions

function digPow(n, p) {
  let nToStr = n.toString().split("");
  let result = 0;
  let power = -1;

  for (let i = 0; i < nToStr.length; i++) {
    power++;
    result = result + Math.pow(parseInt(nToStr[i]), p + power);
  }

  return Math.floor(result / n) < result / n ? -1 : Math.round(result / n);
}

console.log(digPow(92, 1));

// *Best Practice Solution

function bestPracticeDigPow(n, p) {
  let x = String(n)
    .split("")
    .reduce((accum, currVal, idx) => {
      return accum + Math.pow(currVal, p + idx);
    }, 0);

  return x % n ? -1 : x / n;
}

console.log(bestPracticeDigPow(92, 1));
