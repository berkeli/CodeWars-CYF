/* Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */

const oddOrEven = (array) => (array.reduce((a, cv) => a + cv, 0) % 2 === 0 ? 'even' : 'odd');

// TESTS - run the following command to test this file:
// npm run test -- CYF-Catch-Up-Kata/Odd_or_Even.js

test('Odd or Even?', () => {
  expect(oddOrEven([1])).toBe('odd');
  expect(oddOrEven([])).toBe('even');
  expect(oddOrEven([0])).toBe('even');
  expect(oddOrEven([0, 1, 5])).toBe('even');
  expect(oddOrEven([1023, 1, 2])).toBe('even');
  expect(oddOrEven([-1023, 1, -2])).toBe('even');
  expect(oddOrEven([0, 1, 2])).toBe('odd');
  expect(oddOrEven([-1023, -1, 3])).toBe('odd');
  expect(oddOrEven([1023, 1, 3])).toBe('odd');
});
