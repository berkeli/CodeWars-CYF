/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

const solution = (nums) => (nums ? nums.sort((a, b) => a - b) : []);

// TESTS - run the following command to test this file:
// npm run test -- CYF-Handling-Falsy/Sort_Numbers.js

test('Sort Numbers', () => {
  expect(solution([1, 2, 3, 10, 5])).toStrictEqual([1, 2, 3, 5, 10]);
  expect(solution(null)).toStrictEqual([]);
  expect(solution([])).toStrictEqual([]);
  expect(solution([20, 2, 10])).toStrictEqual([2, 10, 20]);
});
