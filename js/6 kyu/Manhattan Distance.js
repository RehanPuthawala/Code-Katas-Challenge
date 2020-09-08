//* Instructions *//

/* 
The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?

Manhattan Distance
Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

Write a function manhattanDistance that accepts two points, pointA and pointB, and returns the Manhattan Distance between the two points.

pointA and pointB are arrays containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.
*/

//* Examples
/*
manhattanDistance( [1, 1], [1, 1] ) // => returns 0
manhattanDistance( [5, 4], [3, 2] ) // => returns 4
manhattanDistance( [1, 1], [0, 3] ) // => returns 3
*/

//* Solutions

function manhattanDistance(pointA, pointB) {
  let xValues = 0;
  let yValues = 0;

  for (let i = 0; i < pointA.length; i++) {
    if (i === 0) {
      xValues +=
        pointA[i] > pointB[i] ? pointA[i] - pointB[i] : pointB[i] - pointA[i];
    } else {
      yValues +=
        pointA[i] > pointB[i] ? pointA[i] - pointB[i] : pointB[i] - pointA[i];
    }
  }

  return xValues + yValues;
}

console.log(manhattanDistance([1, 1], [1, 1]));

//* Best Practices

function manhattanDistance(pointA, pointB) {
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}
