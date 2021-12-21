/*
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
*/

const add = (n) => (m) => m + n;

// TESTS - run the following command to test this file:
// npm run test -- JS2-Week3/Functional_Addition.js

test('Split The Bill', () => {
  expect(add(1)(3)).toBe(4);
  expect(add(10)(5)).toBe(15);
  expect(add(1)(1)).toBe(2);
});
