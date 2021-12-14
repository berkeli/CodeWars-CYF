/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

const past = (h, m, s) => ((60 * h + m) * 60 + s) * 1000;

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week1/Beginner_Series_N2_Clock.js

test('Beginner Series #2 Clock:', () => {
  expect(past(0, 1, 1)).toBe(61000);
  expect(past(1, 1, 1)).toBe(3661000);
  expect(past(0, 0, 0)).toBe(0);
  expect(past(1, 0, 1)).toBe(3601000);
  expect(past(1, 0, 0)).toBe(3600000);
});
