/* eslint-disable no-restricted-globals */
/* Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

For example:
solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.
Let's now add two letters to the last example:

solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters.
The input will be an array of lowercase letters and numbers only.

In some languages (Haskell, C++, and others), input will be an array of strings:

solve ["0","1","2","3","a","b"] = 0  */

const solve = (arr) => arr.reduce((a, cv) => {
  if (isNaN(cv)) return a;
  return cv % 2 === 0 ? a + 1 : a - 1;
}, 0);

// TESTS - run the following command to test this file:
// npm run test -- CYF-Catch-Up-Kata/Even_odd_disparity.js

test('Even odd disparity', () => {
  expect(solve([0, 1, 2, 3])).toBe(0);
  expect(solve([0, 1, 2, 3, 'a', 'b'])).toBe(0);
  expect(solve([0, 15, 'z', 16, 'm', 13, 14, 'c', 9, 10, 13, 'u', 4, 3])).toBe(0);
  expect(solve([13, 6, 8, 15, 4, 8, 13])).toBe(1);
  expect(solve([1, 'a', 17, 8, 'e', 3, 'i', 12, 1])).toBe(-2);
  expect(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9])).toBe(2);
});
