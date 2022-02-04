/* eslint-disable no-param-reassign */
/* eslint-disable no-extend-native */
/* eslint-disable func-names */
/* Adding useful functional functionality to JavaScript arrays
The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum . Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]

Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3 Example: Array.range(-1,4).sum() should return 2

While not forbidden try to write both function without using a for loop
*/

Array.range = function (start, count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(start);
    start++;
  }
  return arr;
};

Array.prototype.sum = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

// TESTS - run the following command to test this file:
// npm run test -- CYF-React/Adding_useful_functional_functionality_to_JS_arrays.js

test('Adding useful functional functionality to JavaScript arrays', () => {
  expect(Array.range(1, 3)).toStrictEqual([1, 2, 3]);
  expect(Array.range(-1, 1)).toStrictEqual([-1]);
  expect(Array.range(-3, 5)).toStrictEqual([-3, -2, -1, 0, 1]);
  expect([-2, -1, -5].sum()).toStrictEqual(-8);
});
