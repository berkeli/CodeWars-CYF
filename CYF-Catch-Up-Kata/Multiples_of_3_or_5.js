/* eslint-disable no-nested-ternary */
/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
 */

function solution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    sum += i % 5 ? (i % 3 ? 0 : i) : i;
  }
  return sum;
}

// TESTS - run the following command to test this file:
// npm run test -- CYF-Catch-Up-Kata/Multiples_of_3_or_5.js

test('Multiples of 3 or 5', () => {
  expect(solution(10)).toBe(23);
  expect(solution(0)).toBe(0);
  expect(solution(99)).toBe(2219);
});
