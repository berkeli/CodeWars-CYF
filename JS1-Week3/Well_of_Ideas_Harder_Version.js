/*
Well of Ideas - Harder Version
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/

function well(x) {
  let good = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (typeof x[i][j] === 'string' && x[i][j].toLowerCase() === 'good') {
        good += 1;
        if (good > 2) return 'I smell a series!';
      }
    }
  }
  if (good > 0) return 'Publish!';
  return 'Fail!';
}

// TESTS - run the following command to test this file:
// npm run test -- JS1-Week3/Well_of_Ideas_Harder_Version.js

test('Logical calculator', () => {
  expect(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']])).toBe('Fail!');
  expect(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']])).toBe('Publish!');
  expect(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']])).toBe('I smell a series!');
});
