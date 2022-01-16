/* Grasshopper - Function syntax debugging
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
*/

const main = (verb, noun) => verb + noun;

// TESTS - run the following command to test this file:
// npm run test -- CYF-Fundamentals/Grasshopper_Function_syntax_debugging.js

test('Grasshopper - Function syntax debugging', () => {
  expect(main('take ', 'item')).toBe('take item');
  expect(main('use ', 'sword')).toBe('use sword');
});
