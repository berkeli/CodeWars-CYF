/* eslint-disable no-nested-ternary */
/* eslint-disable no-confusing-arrow */
/* Mix Fruit Juice

Story
Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

Input
The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input.
*/

const reg = ['banana', 'orange', 'apple', 'lemon', 'grapes'];
const sp = ['avocado', 'strawberry', 'mango'];

const mixFruit = (arr) => Math.round(arr.reduce((a, cv) => reg.includes(cv.toLowerCase()) ? a + 5 : sp.includes(cv.toLowerCase()) ? a + 7 : a + 9, 0) / arr.length);

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/Mix_Fruit_Juice.js

test('Mix Fruit Juice', () => {
  expect(mixFruit(['banana', 'mango', 'avocado'])).toBe(6);
  expect(mixFruit(['melon', 'Mango', 'kiwi'])).toBe(8);
  expect(mixFruit(['watermelon', 'cherry', 'avocado'])).toBe(8);
  expect(mixFruit(['apple', 'Banana'])).toBe(5);
  expect(mixFruit(['watermelon', 'lime', 'tomato'])).toBe(9);
  expect(mixFruit(['blackBerry', 'coconut', 'avocado'])).toBe(8);
  expect(mixFruit(['waterMelon', 'mango'])).toBe(8);
  expect(mixFruit(['watermelon', 'pEach'])).toBe(9);
  expect(mixFruit(['watermelon', 'Orange', 'grapes'])).toBe(6);
  expect(mixFruit(['watermelon'])).toBe(9);
  expect(mixFruit(['BlACKbeRrY', 'cOcONuT', 'avoCaDo'])).toBe(8);
});
