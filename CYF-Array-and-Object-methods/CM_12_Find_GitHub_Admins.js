/* Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

Notes:

The original order should be preserved.
If there are no GitHub admin developers in a given language then return an empty array [].
The input array will always be valid and formatted as in the example above.
The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
*/

const findAdmin = (arr, lang) => arr.filter(({ language, githubAdmin }) => language === lang && githubAdmin === 'yes');

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/CM_12_Find_GitHub_Admins.js

const list1 = [
  {
    firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes',
  },
  {
    firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no',
  },
  {
    firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes',
  },
  {
    firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no',
  },
];

const answer1 = [
  {
    firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes',
  },
  {
    firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes',
  },
];

test('Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins', () => {
  expect(findAdmin(list1, 'JavaScript')).toStrictEqual(answer1);
});
