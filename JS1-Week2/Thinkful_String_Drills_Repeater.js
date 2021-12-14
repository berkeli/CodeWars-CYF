/*
Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa"
*/

const repeater = (string, n) => string.repeat(n) ;

// TESTS - run the following command to test this file: 
// npm run test -- JS1-Week2/Thinkful_String_Drills_Repeater.js

test('Thinkful - String Drills: Repeater', () => {  
    expect(repeater('a', 5)).toBe('aaaaa');
    expect(repeater('Na', 16)).toBe('NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
    expect(repeater('Wub ', 6)).toBe('Wub Wub Wub Wub Wub Wub ');
    expect(repeater('ha ', 3)).toBe('ha ha ha ');
})