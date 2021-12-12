/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

const greet = (name, owner) => name == owner ? "Hello boss" : "Hello guest"

// TESTS - run the following command to test this file: 
// npm run test -- JS1-Week1/Grasshopper_Personalized_Message.js

test("Grasshopper - Personalized Message", ()=>{
    expect(greet("Daniel", "Daniel")).toBe("Hello boss");
    expect(greet("Greg", "Daniel")).toBe("Hello guest");
})