/* eslint-disable no-nested-ternary */
/*
What's the real floor?
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
*/

const getRealFloor = (n) => (n > 13 ? n - 2 : n > 0 ? n - 1 : n);

// TESTS - run the following command to test this file:
// npm run test -- JS2-Week2/Whats_the_real_floor.js

test('What\'s the real floor?', () => {
  expect(getRealFloor(1)).toBe(0);
  expect(getRealFloor(5)).toBe(4);
  expect(getRealFloor(15)).toBe(13);
  expect(getRealFloor(-3)).toBe(-3);
  expect(getRealFloor(0)).toBe(0);
});
