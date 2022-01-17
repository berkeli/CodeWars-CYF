/* Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const moveZeros = (arr) => arr.filter((e) => e !== 0).concat(arr.filter((e) => e === 0));

// TESTS - run the following command to test this file:
// npm run test -- CYF-Array-and-Object-methods/Moving_Zeros_To_The_End.js

test('Moving Zeros To The End', () => {
  expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
});
