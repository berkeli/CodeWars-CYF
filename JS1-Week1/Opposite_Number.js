/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

const opposite = number => -number; 

// TESTS - run the following command to test this file: 
// npm run test -- JS1-Week1/Opposite_Number.js

test("Opposite Number: 1 must return -1", ()=>{
    expect(opposite(1)).toBe(-1);
})
test("Opposite Number: 7 must return -7", ()=>{
    expect(opposite(7)).toBe(-7);
})
test("Opposite Number: -34 must return 34", ()=>{
    expect(opposite(-34)).toBe(34);
}) 