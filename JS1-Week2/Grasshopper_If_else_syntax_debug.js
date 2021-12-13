/*
If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.
*/

const checkAlive = health => health > 0

// TESTS - run the following command to test this file: 
// npm run test -- JS1-Week2/Grasshopper_If_else_syntax_debug.js

test('If/else syntax debug', () => {  
    expect(checkAlive(5)).toBe(true);
    expect(checkAlive(0)).toBe(false);
    expect(checkAlive(-2)).toBe(false);
    expect(checkAlive(0.5)).toBe(true);
})
