/* Flatten and sort an array
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

*/

const flattenAndSort = (array) => [].concat(...array).sort((a, b) => a - b);

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/Flatten_and_sort_an_array.js

test('Flatten and sort an array', () => {
  expect(flattenAndSort([])).toStrictEqual([]);
  expect(flattenAndSort([[], []])).toStrictEqual([]);
  expect(flattenAndSort([[], [1]])).toStrictEqual([1]);
  expect(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toStrictEqual([1, 2, 3, 4, 5, 6, 100]);
});
