const assert = require('assert');

const t = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

const t2 = [
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6]
];

const spiral = a => {
  let i = 0;
  let currentRow = 0;
  let lastRow = a.length;

  let currentCol = 0;
  let lastCol = a[0].length;

  const results = [];

  while (currentRow < lastRow && currentCol < lastCol) {
    /* Print the first row from
           the remaining rows */
    for (i = currentCol; i < lastCol; i += 1) {
      // console.log(a[currentRow][i]);
      results.push(a[currentRow][i]);
    }
    currentRow++;

    /* Print the last column
     from the remaining columns */
    for (i = currentRow; i < lastRow; i += 1) {
      // console.log(a[i][lastCol - 1]);
      results.push(a[i][lastCol - 1]);
    }
    lastCol--;

    /* Print the last row from
            the remaining rows */
    if (currentRow < lastRow) {
      for (i = lastCol - 1; i >= currentCol; i -= 1) {
        // console.log(a[lastRow - 1][i]);
        results.push(a[lastRow - 1][i]);
      }
      lastRow--;
    }

    /* Print the first column from
               the remaining columns */
    if (currentCol < lastCol) {
      for (i = lastRow - 1; i >= currentRow; i -= 1) {
        // console.log(a[i][currentCol]);
        results.push(a[i][currentCol]);
      }
      currentCol++;
    }
  }
  return results;
};

assert.deepEqual(spiral(t), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.deepEqual(spiral(t2), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
