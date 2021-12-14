/*
Use reduce() to calculate the sum of the values in an array
Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

function sum(array) {
  // Use array.reduce() to find and return the
  // sum of the values in array.
}
For example:

var someNumbers = [1,2,3,4,5,6,7,8,9,10];

sum(someNumbers); // should return 55
*/

function sum(array) {
  return array.reduce((a, b) => a + b);
}

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week3/Use_reduce_to_calculate_the_sum_of_the_values_in_an_array.js

test('Even or Odd: 2 must be even', () => {
  expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
  expect(sum([71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38])).toBe(32830.6);
});
