/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

const countSheeps = arrayOfSheep => arrayOfSheep.filter(e => e).length

// TESTS - run the following command to test this file: 
// npm run test -- JS1-Week2/Counting_Sheep.js

test('Counting Sheep...', () => {  
    expect(countSheeps(
        [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true ])).toBe(17);
    expect(countSheeps([true])).toBe(1);
    expect(countSheeps([])).toBe(0);
})
