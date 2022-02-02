/* eslint-disable func-names */
/* Bob has written a function to detect the type of an object.
It receives any primitive values or objects, and returns its object type as a string.
 But it seems to be working incorrectly. Can you figure out why, and fix the code for him?
 */
function objectType(obj) {
  return Object.prototype.toString.call(arguments.length === 0 ? null : obj);
}

// TESTS - run the following command to test this file:
// npm run test -- CYF-Handling-Falsy/Check_your_arguments.js

test('Check your arguments5 without numbers !!', () => {
  expect(objectType(42)).toBe('[object Number]');
  expect(objectType(false)).toBe('[object Boolean]');
  expect(objectType(function () { return this; })).toBe('[object Function]');
  expect(objectType(/^_^/g)).toBe('[object RegExp]');
  expect(objectType(null)).toBe('[object Null]');
});
