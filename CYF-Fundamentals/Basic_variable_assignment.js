/* This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why? */

const a = 'code';
const b = 'wa.rs';
const name = a + b;

// TESTS - run the following command to test this file:
// npm run test -- CYF-Fundamentals/Basic_variable_assignment.js

test('Basic variable assignment', () => {
  expect(name).toBe('codewa.rs');
});
