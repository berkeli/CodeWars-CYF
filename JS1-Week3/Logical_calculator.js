/*
Logical calculator
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
*/

function logicalCalc(array, op) {
  let answer = array[0];
  for (let i = 1; i < array.length; i++) {
    switch (op) {
      case 'AND':
        answer = answer && array[i];
        break;
      case 'OR':
        answer = answer || array[i];
        break;
      default:
        answer = answer !== array[i];
        break;
    }
  }
  return answer;
}

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week3/Logical_calculator.js

test('Logical calculator', () => {
  expect(logicalCalc([true, true, true, false], 'AND')).toBe(false);
  expect(logicalCalc([true, true, true, false], 'OR')).toBe(true);
  expect(logicalCalc([true, true, true, false], 'XOR')).toBe(true);
  expect(logicalCalc([true, true, false, false], 'AND')).toBe(false);
  expect(logicalCalc([true, true, false, false], "OR")).toBe(true);
});
