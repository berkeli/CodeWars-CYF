//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const even_or_odd = (number) => number % 2 ? "Odd" : "Even"

// TESTS - run the following command to test this file: 
// npm run test -- JS1-Week1/Even_or_Odd.js

test("Even or Odd: 2 must be even", () => {  
    expect(even_or_odd(2)).toBe("Even");
})
test("Even or Odd: 7 must be odd", () => {  
    expect(even_or_odd(7)).toBe("Odd");
})
test("Even or Odd: -42 must be even", () => {  
    expect(even_or_odd(-42)).toBe("Even");
})
test("Even or Odd: -7 must be odd", () => {  
    expect(even_or_odd(-7)).toBe("Odd");
})
test("Even or Odd: 0 must be even", () => {  
    expect(even_or_odd(2)).toBe("Even");
})