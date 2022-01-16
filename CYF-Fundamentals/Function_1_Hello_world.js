/* Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
*/

const greet = () => 'hello world!';

// TESTS - run the following command to test this file:
// npm run test -- CYF-Fundamentals/Function_1_Hello_world.js

test('Function 1 - hello world:', () => {
  expect(greet()).toBe('hello world!');
  expect(typeof greet).toBe('function');
});
