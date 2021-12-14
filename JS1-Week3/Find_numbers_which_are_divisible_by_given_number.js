/*
Find numbers which are divisible by given number

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

*/

function divisibleBy(numbers, divisor) {
  return numbers.filter((e) => e % divisor === 0);
}

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week3/Find_numbers_which_are_divisible_by_given_number.js

test('Use map() to double the values in an array', () => {
  expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([2, 4, 6]);
  expect(divisibleBy([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([3, 6]);
  expect(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)).toStrictEqual([0, 4]);
  expect(divisibleBy([0], 4)).toStrictEqual([0]);
  expect(divisibleBy([1, 3, 5], 2)).toStrictEqual([]);
});
