/* Write a function to split a string and convert it into an array of words. For example:

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */

const stringToArray = (s) => s.split(' ');

// TESTS - run the following command to test this file:
// npm run test -- CYF-Fundamentals/Convert_a_string_to_an_array.js

test('Convert a string to an array', () => {
  expect(stringToArray('Robin Singh')).toStrictEqual(['Robin', 'Singh']);
  expect(stringToArray('I love arrays they are my favorite')).toStrictEqual(['I', 'love', 'arrays', 'they', 'are', 'my', 'favorite']);
});
