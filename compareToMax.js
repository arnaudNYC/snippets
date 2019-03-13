/*
 * Find the largest element in an array
 * This is just to mess around with running time
 */
const assert = require("assert");
const rand = max => Math.floor(Math.random() * Math.floor(max));

const largeArray = Array.from(
  { length: 100000 },
  () => rand(1000000) // random value between 0 and 999,999
  // () => rand(50), // random value between 0 and 49
  // (v, i) => i, // sorted integers
  // () => 0, // all zeros
);

// largeArray[largeArray.length - 1] = 1000000; // worst case: largest number is at the end
// largeArray[0] = 1000000; // best case, largest number is at the beginning

// average case, the largest number is in the middle
largeArray[rand(Math.round((largeArray.length - 1) / 2))] = 1000000;

// fast but will exceed call stack for large arrays
const compareToMax = array => Math.max(...array);

// worst/average case is Θ(n log(n)), best case is O(n) Timsort: https://v8.dev/blog/array-sort
const compareToMax2 = array => {
  if (array.length === 0) {
    return -Infinity;
  }
  return array.sort((a, b) => b - a)[0];
};

// O(n)
const compareToMax3 = array =>
  array.reduce((acc, curr) => Math.max(acc, curr), -Infinity);

// returns the largets number using spread
assert.equal(compareToMax([1, 10, 4]), 10);
assert.equal(compareToMax([]), -Infinity);
assert.equal(compareToMax(largeArray), 1000000);

// returns the largets number using reduce
assert.equal(compareToMax3([1, 10, 4]), 10);
assert.equal(compareToMax3([]), -Infinity);
assert.equal(compareToMax3(largeArray), 1000000);

// returns the largets number using sort
assert.equal(compareToMax2([1, 10, 4]), 10);
assert.equal(compareToMax2([]), -Infinity);
assert.equal(compareToMax2(largeArray), 1000000);
