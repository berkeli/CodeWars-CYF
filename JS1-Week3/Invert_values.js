/*
Invert values
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/
function invert(array) {
  return array.map((e) => -e);
}

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week3/Invert_values.js

test('Invert values', () => {
  expect(invert([1, 2, 3, 4, 5])).toStrictEqual([-1, -2, -3, -4, -5]);
  expect(invert([1, -2, 3, -4, 5])).toStrictEqual([-1, 2, -3, 4, -5]);
  expect(invert([])).toStrictEqual([]);
  expect(invert([0])).toStrictEqual([-0]);
});
