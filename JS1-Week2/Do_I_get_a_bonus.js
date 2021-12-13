/*
Do I get a bonus?
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).
*/

const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`


// TESTS - run the following command to test this file: 
// npm run test -- JS1-Week2/Do_I_get_a_bonus.js

test('Do I get a bonus?', () => {  
    expect(bonusTime(2, true)).toBe("£20");
    expect(bonusTime(10000, true)).toBe("£100000");
    expect(bonusTime(25000, true)).toBe("£250000");
    expect(bonusTime(78, false)).toBe("£78");
    expect(bonusTime(67890, true)).toBe("£678900");
})
