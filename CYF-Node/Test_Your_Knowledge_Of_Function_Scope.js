/* Test Your Knowledge Of Function Scope
Write a function that adds from two invocations.

All inputs will be integers.

add(3)(4)  // 7
add(12)(20) // 32
*/

const add = (a) => (b) => a + b;

// TESTS - run the following command to test this file:
// npm run test -- CYF-Node/Test_Your_Knowledge_Of_Function_Scope.js

test('Your Knowledge Of Function Scope', () => {
  expect(add(3)(4)).toBe(7);
  expect(add(12)(20)).toBe(32);
});
