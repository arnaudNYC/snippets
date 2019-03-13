/*
 * Check that the parantheses are balanced
 */
const assert = require("assert");

const balanced = str => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "(") {
      count += 1;
    } else if (str[i] === ")") {
      count -= 1;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
};

assert.equal(balanced("(())"), true);
assert.equal(balanced("()()"), true);
assert.equal(balanced("(()"), false);
assert.equal(balanced(")("), false);
