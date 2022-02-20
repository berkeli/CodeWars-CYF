/* Fix my method
I am kind of new to coding so I'm not sure what is wrong with my code.

Property objMethod should be called by myFunction.

Can you fix the syntax so myFunction will be working again? Please check things like braces, commas, and letter case.

IMPORTANT: Returning just "string" is insufficient. We are required to use Object Literal Notation.
*/

const myFunction = () => {
    var myObject = {
      objProperty: "string",
      objMethod: function() {
        return this.objProperty;
      }
    }
    return myObject;
};


// TESTS - run the following command to test this file:
// npm run test -- JS3-Week1/Fix_my_method.js

test('Fix my method', () => {
    expect(myFunction().objMethod()).toBe('string');    
});
  