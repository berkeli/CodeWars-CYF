/* Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice 
*/

const duplicateCount = (text) => {
    const count = {}
    let answer = 0;
    text.toLowerCase().split('').forEach(e => {
      if (count[e]) {
        answer += count[e] === 1 ? 1 : 0;
      } else {
        count[e] = 0
      }
      count[e]++;
    })  
    return answer
}

// TESTS - run the following command to test this file:
// npm run test -- JS3-Week3/Counting_Duplicates.js

test('Count the number of Duplicates', () => {
    expect(duplicateCount('')).toBe(0);
    expect(duplicateCount('abcde')).toBe(0);
    expect(duplicateCount('aabbcde')).toBe(2);
    expect(duplicateCount('aabBcde')).toBe(2);
    expect(duplicateCount('Indivisibility')).toBe(1);
    expect(duplicateCount('Indivisibilities')).toBe(2);
});
  