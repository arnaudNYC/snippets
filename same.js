const assert = require("assert");

const same = (str, sub) => {
    const results = [];
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === sub[0]) {
            let equal = true;
            for (let j = 0; j < sub.length; j += 1) {
                if (str[i + j] !== sub[j]) {
                    equal = false;
                    break;
                }
            }
            if (equal) {
                results.push(i);
            }
        }
    }
    return results;
}

assert.deepEqual(same('abcdefghdefghj', 'hjz'), []);
assert.deepEqual(same('abcdefgh', 'cde'), [2]);
assert.deepEqual(same('abcdefgh', 'def'), [3]);
assert.deepEqual(same('abcdefghdefghj', 'def'), [3, 8]);
assert.deepEqual(same('bbbbbbbbbb', 'bbb'), [0, 1, 2, 3, 4, 5, 6, 7]);