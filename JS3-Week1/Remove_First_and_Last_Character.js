/* Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

const removeChar = (str) => str.substring(1,str.length-1)


// TESTS - run the following command to test this file:
// npm run test -- JS3-Week1/Remove_First_and_Last_Character.js

test('Remove First and Last Character', () => {
    expect(removeChar('eloquent')).toBe('loquen');    
    expect(removeChar('country')).toBe('ountr');    
    expect(removeChar('person')).toBe('erso');    
    expect(removeChar('place')).toBe('lac');    
    expect(removeChar('ooopsss')).toBe('oopss');    
});
  