/* eslint-disable no-nested-ternary */
/* I know that there are quite a few fizz-buzz problems already out there but this one does have a twist (you may find this useful)

Task
You need to implement a function that applies the standard fizz buzz test:

If a number is divisible by 3, return Fizz
If it is divisible by 5, return Buzz
If it is divisible by both 3 and 5, return FizzBuzz
If it is not divisible by 3 or 5, return the number itself
However, when making the function, you cannot use if (meaning else is also not an option).

Input
A number will always be provided
The number provided will always be positive and an integer
Examples
6 should return Fizz
10 should return Buzz
15 should return FizzBuzz
17 should return 17 */

const fizzBuzz = (n) => ((n % 5) + (n % 3) === 0 ? 'FizzBuzz' : n % 5 === 0 ? 'Buzz' : n % 3 === 0 ? 'Fizz' : n);

// TESTS - run the following command to test this file:
// npm run test -- CYF-Catch-Up-Kata/Fizz_Buzz_Without_ifs.js

test('Fizz Buzz - Without ifs', () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(6)).toBe('Fizz');
  expect(fizzBuzz(7)).toBe(7);
  expect(fizzBuzz(10)).toBe('Buzz');
  expect(fizzBuzz(30)).toBe('FizzBuzz');
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});
