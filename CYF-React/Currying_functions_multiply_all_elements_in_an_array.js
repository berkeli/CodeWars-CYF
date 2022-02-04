/* Currying functions: multiply all elements in an array
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.

Here's a nice Youtube video about currying, which might help you if this is new to you.
*/

const multiplyAll = (arr) => (a) => arr.map((e) => e * a);

// TESTS - run the following command to test this file:
// npm run test -- CYF-React/Currying_functions_multiply_all_elements_in_an_array.js

test('Currying functions: multiply all elements in an array', () => {
  expect(multiplyAll([1])(1)).toBeInstanceOf(Array);
  expect(multiplyAll([1, 2])(1).length).toBe(2);
  expect(multiplyAll([1, 2, 3])(1)).toStrictEqual([1, 2, 3]);
  expect(multiplyAll([1, 2, 3])(2)).toStrictEqual([2, 4, 6]);
});
