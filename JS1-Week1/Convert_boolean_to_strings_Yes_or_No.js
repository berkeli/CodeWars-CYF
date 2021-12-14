/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

const boolToWord = (bool) => (bool ? 'Yes' : 'No');

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week1/Convert_boolean_to_strings_Yes_or_No.js

test('Grasshopper - Personalized Message', () => {
  expect(boolToWord(true)).toBe('Yes');
  expect(boolToWord(false)).toBe('No');
});
