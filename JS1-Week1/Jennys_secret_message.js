/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

const greet = (name) => (name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`);

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week1/Jennys_secret_message.js

test("Jenny's secret message", () => {
  expect(greet('Johnny')).toBe('Hello, my love!');
  expect(greet('Jim')).toBe('Hello, Jim!');
  expect(greet('Jane')).toBe('Hello, Jane!');
  expect(greet('Simon')).toBe('Hello, Simon!');
  expect(greet('Tony')).toBe('Hello, Tony!');
});
