/* Naughty or Nice
Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"
*/

const naughtyOrNice = (data) => {
  let count = 0;
  Object.values(data).forEach((e) => {
    Object.values(e).forEach((e2) => {
      console.log(e2);
      count += e2 === 'Nice' ? 1 : -1;
    });
  });
  return count >= 0 ? 'Nice!' : 'Naughty!';
};

// TESTS - run the following command to test this file:
// npm run test -- CYF-Node/Naughty_or_Nice.js

test('Naughty or Nice', () => {
  expect(naughtyOrNice({
    January: {
      1: 'Naughty', 2: 'Naughty', 3: 'Nice', 4: 'Naughty', 5: 'Nice', 6: 'Nice', 7: 'Nice', 8: 'Naughty', 9: 'Nice', 10: 'Nice', 11: 'Nice', 12: 'Nice', 13: 'Naughty', 14: 'Naughty', 15: 'Nice', 16: 'Naughty', 17: 'Nice', 18: 'Nice', 19: 'Nice', 20: 'Nice', 21: 'Nice', 22: 'Nice', 23: 'Naughty', 24: 'Naughty', 25: 'Nice', 26: 'Nice', 27: 'Nice', 28: 'Naughty', 29: 'Nice', 30: 'Nice', 31: 'Nice',
    },
    February: {
      1: 'Nice', 2: 'Nice', 3: 'Naughty', 4: 'Naughty', 5: 'Nice', 6: 'Naughty', 7: 'Naughty', 8: 'Naughty', 9: 'Nice', 10: 'Nice', 11: 'Nice', 12: 'Nice', 13: 'Naughty', 14: 'Naughty', 15: 'Naughty', 16: 'Nice', 17: 'Nice', 18: 'Nice', 19: 'Naughty', 20: 'Nice', 21: 'Nice', 22: 'Naughty', 23: 'Naughty', 24: 'Nice', 25: 'Naughty', 26: 'Naughty', 27: 'Nice', 28: 'Nice',
    },
    March: {
      1: 'Nice', 2: 'Nice', 3: 'Nice', 4: 'Nice', 5: 'Nice', 6: 'Naughty', 7: 'Naughty', 8: 'Naughty', 9: 'Nice', 10: 'Naughty', 11: 'Naughty', 12: 'Naughty', 13: 'Nice', 14: 'Nice', 15: 'Nice', 16: 'Naughty', 17: 'Naughty', 18: 'Naughty', 19: 'Nice', 20: 'Naughty', 21: 'Naughty', 22: 'Nice', 23: 'Naughty', 24: 'Nice', 25: 'Naughty', 26: 'Nice', 27: 'Nice', 28: 'Naughty', 29: 'Nice', 30: 'Naughty', 31: 'Nice',
    },
    April: {
      1: 'Nice', 2: 'Nice', 3: 'Nice', 4: 'Naughty', 5: 'Naughty', 6: 'Naughty', 7: 'Naughty', 8: 'Nice', 9: 'Naughty', 10: 'Naughty', 11: 'Naughty', 12: 'Naughty', 13: 'Nice', 14: 'Naughty', 15: 'Naughty', 16: 'Naughty', 17: 'Nice', 18: 'Nice', 19: 'Nice', 20: 'Nice', 21: 'Nice', 22: 'Naughty', 23: 'Naughty', 24: 'Naughty', 25: 'Naughty', 26: 'Naughty', 27: 'Naughty', 28: 'Nice', 29: 'Nice', 30: 'Naughty',
    },
    May: {
      1: 'Nice', 2: 'Nice', 3: 'Nice', 4: 'Naughty', 5: 'Nice', 6: 'Nice', 7: 'Naughty', 8: 'Naughty', 9: 'Naughty', 10: 'Naughty', 11: 'Naughty', 12: 'Naughty', 13: 'Naughty', 14: 'Nice', 15: 'Nice', 16: 'Nice', 17: 'Naughty', 18: 'Naughty', 19: 'Naughty', 20: 'Naughty', 21: 'Nice', 22: 'Nice', 23: 'Naughty', 24: 'Naughty', 25: 'Naughty', 26: 'Nice', 27: 'Nice', 28: 'Nice', 29: 'Nice', 30: 'Naughty', 31: 'Nice',
    },
    June: {
      1: 'Nice', 2: 'Naughty', 3: 'Naughty', 4: 'Nice', 5: 'Nice', 6: 'Nice', 7: 'Naughty', 8: 'Nice', 9: 'Naughty', 10: 'Nice', 11: 'Nice', 12: 'Nice', 13: 'Naughty', 14: 'Naughty', 15: 'Naughty', 16: 'Naughty', 17: 'Nice', 18: 'Naughty', 19: 'Naughty', 20: 'Naughty', 21: 'Nice', 22: 'Naughty', 23: 'Nice', 24: 'Naughty', 25: 'Nice', 26: 'Nice', 27: 'Nice', 28: 'Naughty', 29: 'Nice', 30: 'Naughty',
    },
    July: {
      1: 'Naughty', 2: 'Nice', 3: 'Naughty', 4: 'Naughty', 5: 'Naughty', 6: 'Naughty', 7: 'Naughty', 8: 'Naughty', 9: 'Nice', 10: 'Naughty', 11: 'Nice', 12: 'Nice', 13: 'Nice', 14: 'Nice', 15: 'Nice', 16: 'Nice', 17: 'Naughty', 18: 'Nice', 19: 'Naughty', 20: 'Nice', 21: 'Nice', 22: 'Nice', 23: 'Naughty', 24: 'Naughty', 25: 'Nice', 26: 'Naughty', 27: 'Naughty', 28: 'Nice', 29: 'Naughty', 30: 'Nice', 31: 'Nice',
    },
    August: {
      1: 'Naughty', 2: 'Naughty', 3: 'Naughty', 4: 'Nice', 5: 'Naughty', 6: 'Nice', 7: 'Nice', 8: 'Nice', 9: 'Nice', 10: 'Naughty', 11: 'Nice', 12: 'Naughty', 13: 'Naughty', 14: 'Nice', 15: 'Naughty', 16: 'Naughty', 17: 'Naughty', 18: 'Naughty', 19: 'Nice', 20: 'Nice', 21: 'Naughty', 22: 'Nice', 23: 'Nice', 24: 'Nice', 25: 'Nice', 26: 'Nice', 27: 'Nice', 28: 'Naughty', 29: 'Naughty', 30: 'Naughty', 31: 'Nice',
    },
    September: {
      1: 'Naughty', 2: 'Naughty', 3: 'Nice', 4: 'Nice', 5: 'Nice', 6: 'Nice', 7: 'Nice', 8: 'Naughty', 9: 'Naughty', 10: 'Naughty', 11: 'Naughty', 12: 'Naughty', 13: 'Nice', 14: 'Nice', 15: 'Nice', 16: 'Naughty', 17: 'Naughty', 18: 'Naughty', 19: 'Nice', 20: 'Nice', 21: 'Nice', 22: 'Naughty', 23: 'Naughty', 24: 'Nice', 25: 'Naughty', 26: 'Nice', 27: 'Naughty', 28: 'Nice', 29: 'Nice', 30: 'Naughty',
    },
    October: {
      1: 'Nice', 2: 'Nice', 3: 'Naughty', 4: 'Nice', 5: 'Nice', 6: 'Naughty', 7: 'Nice', 8: 'Nice', 9: 'Nice', 10: 'Nice', 11: 'Nice', 12: 'Nice', 13: 'Nice', 14: 'Naughty', 15: 'Nice', 16: 'Nice', 17: 'Nice', 18: 'Nice', 19: 'Nice', 20: 'Nice', 21: 'Naughty', 22: 'Nice', 23: 'Nice', 24: 'Naughty', 25: 'Naughty', 26: 'Naughty', 27: 'Nice', 28: 'Nice', 29: 'Nice', 30: 'Naughty', 31: 'Nice',
    },
    November: {
      1: 'Naughty', 2: 'Nice', 3: 'Naughty', 4: 'Naughty', 5: 'Naughty', 6: 'Nice', 7: 'Nice', 8: 'Nice', 9: 'Nice', 10: 'Nice', 11: 'Nice', 12: 'Nice', 13: 'Nice', 14: 'Nice', 15: 'Naughty', 16: 'Naughty', 17: 'Naughty', 18: 'Naughty', 19: 'Naughty', 20: 'Nice', 21: 'Naughty', 22: 'Naughty', 23: 'Naughty', 24: 'Naughty', 25: 'Nice', 26: 'Naughty', 27: 'Naughty', 28: 'Nice', 29: 'Nice', 30: 'Naughty',
    },
    December: {
      1: 'Naughty', 2: 'Nice', 3: 'Naughty', 4: 'Nice', 5: 'Nice', 6: 'Nice', 7: 'Nice', 8: 'Naughty', 9: 'Nice', 10: 'Naughty', 11: 'Naughty', 12: 'Naughty', 13: 'Naughty', 14: 'Nice', 15: 'Naughty', 16: 'Nice', 17: 'Naughty', 18: 'Nice', 19: 'Naughty', 20: 'Naughty', 21: 'Naughty', 22: 'Nice', 23: 'Nice', 24: 'Naughty', 25: 'Nice', 26: 'Nice', 27: 'Naughty', 28: 'Nice', 29: 'Nice', 30: 'Nice', 31: 'Naughty',
    },
  })).toBe('Nice!');
});
