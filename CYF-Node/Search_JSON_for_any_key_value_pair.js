/* Search JSON for any key value pair
You have a friend who works for a well known animation studio. He has heard you talk about your mad programming skills and ask for your help in writing a function that can search some JSON records and return matching character details.

He needs to be able to search for objects in the collection by any of the objects keys and return an array of all the matches.

The basic structure of the JSON object is shown below:

let characters = {"characters": [
    {"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"},
    // ......
]};
The JSON object is preloaded and can be accessed using the variable characters.

Your function will also need to accommodate the following:

Passed value does not match any keys: in this instance return an empty array.
Passed key does not exist: in this instance return an empty array.
Passed val should not be case sensitive.
*/

const getCharacters = (obj, key, val) => {
  const foundCharacters = [];
  obj.characters.forEach((e) => {
    if (e[key] && e[key].toLowerCase().includes(val.toLowerCase())) {
      foundCharacters.push(e);
    }
  });
  return foundCharacters;
};

// TESTS - run the following command to test this file:
// npm run test -- CYF-Node/Search_JSON_for_any_key_value_pair.js

const obj = {
  characters:
    [{ name: 'Dipper Pines', age: '12', speciality: 'adventurer' },
      {
        name: 'Mabel Pines',
        age: '12',
        speciality: 'energetic optimist',
      },
      { name: 'Grunkle Stan', age: 'Unknown', speciality: 'shyster' },
      {
        name: 'Soos Ramirez',
        age: '22',
        speciality: ' lovable man-child',
      },
      {
        name: 'Wendy Corduroy',
        age: '15',
        speciality: 'sociable and nonchalant',
      },
      { name: 'Waddles', age: 'Unknown', speciality: 'pig stuff' },
      {
        name: 'Tambry',
        age: '15',
        speciality: 'sociable and nonchalant',
      }],
};

test('Search JSON for any key value pair', () => {
  expect(getCharacters(obj, 'name', 'Dipper Pines')).toStrictEqual([{ name: 'Dipper Pines', age: '12', speciality: 'adventurer' }]);
  expect(getCharacters(obj, 'name', 'waddles')).toStrictEqual([{ name: 'Waddles', age: 'Unknown', speciality: 'pig stuff' }]);
  expect(getCharacters(obj, 'name', 'Wendy')).toStrictEqual([{ name: 'Wendy Corduroy', age: '15', speciality: 'sociable and nonchalant' }]);
});
