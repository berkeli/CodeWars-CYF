/* eslint-disable no-nested-ternary */
/*
Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

const bmi = (weight, height) => {
  const bmiCalc = weight / (height * height);
  return bmiCalc <= 18.5 ? 'Underweight' : bmiCalc <= 25 ? 'Normal' : bmiCalc <= 30 ? 'Overweight' : 'Obese';
};

// TESTS - run the following command to test this file:
// npm run test -- JS2-Week2/Calculate_BMI.js

test('Calculate BMI', () => {
  expect(bmi(80, 1.80)).toBe('Normal');
  expect(bmi(50, 1.80)).toBe('Underweight');
  expect(bmi(90, 1.80)).toBe('Overweight');
  expect(bmi(110, 1.80)).toBe('Obese');
  expect(bmi(50, 1.50)).toBe('Normal');
});
