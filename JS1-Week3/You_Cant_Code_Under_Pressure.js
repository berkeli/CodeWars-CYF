/*
Code as fast as you can! You need to double the integer and return it..
*/

function doubleInteger(i) {
  return i * 2;
}

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week3/You_Cant_Code_Under_Pressure.js

test('You Can\'t Code Under Pressure #1', () => {
  expect(doubleInteger(2)).toBe(4);
  expect(doubleInteger(1)).toBe(2);
  expect(doubleInteger(5)).toBe(10);
  expect(doubleInteger(-1)).toBe(-2);
});
