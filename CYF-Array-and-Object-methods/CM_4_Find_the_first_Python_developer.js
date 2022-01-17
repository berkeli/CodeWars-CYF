/* Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
your function should return Victoria, Puerto Rico.

Notes:

The input array will always be valid and formatted as in the example above.
*/

const getFirstPython = (list) => {
  const id = list.findIndex((e) => e.language === 'Python');
  return id > -1 ? `${list[id].firstName}, ${list[id].country}` : 'There will be no Python developers';
};

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/CM_4_Find_the_first_Python_developer.js

const list1 = [
  {
    firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript',
  },
  {
    firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python',
  },
  {
    firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure',
  },
];

const list2 = [
  {
    firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript',
  },
  {
    firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby',
  },
];

test('Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer', () => {
  expect(getFirstPython(list1)).toBe('Victoria, Puerto Rico');
  expect(getFirstPython(list2)).toBe('There will be no Python developers');
});
