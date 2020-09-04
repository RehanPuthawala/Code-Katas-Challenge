//* Description *//
/* Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.*/

//* Rules * //

/* Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point 
 
 A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

 */

//* Example * //

/* Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2, 4, 4, 5, 4   450:  400 (for three 4s) + 50 (for the 5)*/

function score(dice) {
  let points = 0;
  let repeatedNumberArr = [];

  for (let i = 0; i < dice.length; i++) {
    let repeating = 1;
    if (!repeatedNumberArr.includes(dice[i])) {
      for (let j = i + 1; j < dice.length; j++) {
        if (dice[i] === dice[j]) {
          repeating++;
          repeatedNumberArr.push(dice[i]);
        }
      }

      if (repeating >= 3) {
        if (dice[i] === 1) {
          points += dice[i] * 1000;
          repeating -= 3;
        } else {
          points += dice[i] * 100;
          repeating -= 3;
        }
      }

      if (repeating <= 2) {
        if (dice[i] === 1) {
          points += repeating * 100;
        } else if (dice[i] === 5) {
          points += repeating * 50;
        } else {
          points += 0;
        }
      }
    }
  }

  return points;
}

console.log(score([2, 4, 4, 5, 4]));
