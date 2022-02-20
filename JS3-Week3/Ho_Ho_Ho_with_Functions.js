/* Ho Ho Ho with Functions!
Santa is learning programming. And what could be the first program, he wants to write? Yes, the "Hello world!" of Christmas: "Ho Ho Ho!". He wants to write a function ho(), which should have the following return values:

ho(); // should return "Ho!"
ho(ho()); // should return "Ho Ho!"
ho(ho(ho())); // should return "Ho Ho Ho!"
Unfortunately he couldn't find any tutorial, which explains, how he could implement that. Can you help him?

Rules:

each call of ho() must add a "Ho" to the string
the "Ho"'s must be separated by a space
at the end of the string, there must be an exclamation mark (!), without a space
*/

const ho = (str) => !str ? 'Ho!' : `Ho ${str}`;

// TESTS - run the following command to test this file:
// npm run test -- JS3-Week3/Ho_Ho_Ho_with_Functions.js

test('Ho Ho Ho with Functions!', () => {
    expect(ho()).toBe('Ho!');
    expect(ho(ho())).toBe('Ho Ho!');
    expect(ho(ho(ho()))).toBe('Ho Ho Ho!');
    expect(ho(ho(ho(ho())))).toBe('Ho Ho Ho Ho!');
});
  
