'use strict';

// The for...of loop is used to iterate over elements in an iterable object, such as an array.
// It provides an easy way to loop through each element without the need for an index or manual iteration.

// Syntax: for (variable of iterable) { ... }


/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function that finds the maximum value in an array
using the 'reduce' method.

E.g. [4,2,7,5,9,2] -> 9
------------------------------------------------------------------------------------------------ */

const maxInArray = (arr) => {

  // The 'reduce' method works by iterating over each element in the array from left to right, applying a function that you provide to each element in turn, and accumulating a single output value.
  // In this case, the function being applied takes two arguments: 'max', which is the accumulated value and 'current', which is the current element being examined.
  // The function returns the greater of 'max' and 'current', as determined by the 'Math.max' function. This becomes the new accumulated value for the next iteration.
  // When 'reduce' has finished examining all elements in the array, it returns the final accumulated value, which is the maximum value in the array.
  return arr.reduce((max, current) => {
    return Math.max(max, current);
  });
};



/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */


const courseInfo = {
  name: 'Code 301',
  duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks' },
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};


const getCourseKeys = (obj) => {
  // Initializing an empty array to hold the keys.
  let keys = [];

  // Using a for-in loop to iterate over the properties of the object.
  // For each property, the property name (i.e., the key) is pushed into the 'keys' array.
  for (let key in obj) {
    keys.push(key);
  }

  // Returning the array of keys.
  return keys;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named checkValues that takes in an object and a value and returns true if the value is in the object.


------------------------------------------------------------------------------------------------ */


// const checkValues = (obj, value) => {
// Using a for-in loop to iterate over the properties of the object.
// for (let key in obj) {
// For each property, check if the property's value matches the 'value' parameter.
// if (obj[key] === value) {
// If a match is found, return true.
//     return true;
//   }
// }

// If the loop completes without finding a match, return false.
// return false;
// };

// Solve using Object.values method.


function checkValues(obj, value) {
  // The 'Object.values' method is used to get an array of the object's own enumerable property values,
  // those values assigned to properties defined directly upon the object itself.
  // Then 'includes' method is used to check if the 'value' is present in that array.
  // It will return true if the value is found, and false otherwise.
  return Object.values(obj).includes(value);
}


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You are given an object with names and their coresponding phone numbers that looks like this:
{
  'Grace Hopper': '222-303-5938',
  'Ada Lovelace': '222-349-9842',
  'Alan Turing': '222-853-5933'
}

HR has asked you to change the data to make it easier to print so that it looks like this:
[
  'Grace Hopper: 222-303-5938',
  'Ada Lovelace: 222-349-9842',
  'Alan Turing: 222-853-5933'
]

------------------------------------------------------------------------------------------------ */

/*
The Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

The output array's elements are arrays themselves in this format: [key, value].

For example:

const object = { foo: 'bar', baz: 42 };

console.log(Object.entries(object));
// expected output: [ ['foo', 'bar'], ['baz', 42] ]

Note: The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array should be sorted first like Object.entries(obj).sort((a, b) => a[0] - b[0]);
*/


// const updateNumbers = (obj) => {
// The 'Object.entries' method is used to get an array of the object's own enumerable string-keyed property [key, value] pairs.
// This array is then transformed using the 'map' method.
// For each pair in the array, destructuring assignment is used to get the name and phone number.
// A string is returned that combines the name and phone number with a colon and space in between.
//   return Object.entries(obj).map(([name, phoneNumber]) => {
//     return `${name}: ${phoneNumber}`;
//   });
// };


const updateNumbers = (obj) => {
  // Initializing an empty array to store the transformed data.
  let updatedList = [];

  // Using a for-in loop to iterate over each property in the object.
  // For each property, the variable 'key' will hold the property name (in this case, a name),
  // and 'obj[key]' will give us the corresponding value (the phone number).
  for (let key in obj) {
    // Pushing a new string to the 'updatedList' array.
    // This string is formatted to include the name, a colon and a space, and the phone number.
    updatedList.push(`${key}: ${obj[key]}`);
  }

  // Returning the final array.
  return updatedList;
};



/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getHouses = (arr) => {
  // Initializing an empty array to store the names of the houses.
  let houses = [];

  // Using the 'map' method to iterate over each character object in the array.
  // For each character, we extract the 'house' property and add it to the 'houses' array.
  houses = arr.map(character => character.house);
  // character.house accesses the value of the "house" property of each "character" object.

  // Returning the final array containing the names of the houses.
  return houses;
};


/*------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  // Using a for...of loop to iterate over each object in the array.
  for (let obj of arr) {
    // Checking if the 'name' property of the current object matches the given character name.
    if (obj.name === character) {
      // Using Object.values to get an array of property values of the object.
      // Checking if the resulting array includes an array value indicating the character has children.
      // If the 'children' property exists and its value is an array with a length greater than 0,
      // it means the character has children, so we return true.
      return Object.values(obj).some(value => Array.isArray(value) && value.length > 0);
    }
  }
  // If the loop completes without finding a matching character, we return false.
  return false;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 6, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {
  // Using a for...of loop to iterate over each object in the array.
  for (let obj of arr) {
    // Checking if the 'name' property of the current object matches the given character name.
    if (obj.name === character) {
      // Using Object.entries to get an array of key-value pairs of the object.
      // Checking if any entry value indicates the character has children.
      // If the 'children' property exists and its value is truthy,
      // it means the character has children, so we return true.
      const entries = Object.entries(obj);
      for (let [key, value] of entries) {
        if (key === 'children' && value) {
          return true;
        }
      }
    }
  }
  // If the loop completes without finding a matching character, we return false.
  return false;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  // Using the 'length' property to return the number of characters in the array.
  return arr.length;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {
  // Creating an empty object to store the house names and member counts
  const houseMap = {};

  // Iterating over each character in the array
  for (let character of arr) {
    // Extracting the house name from the current character
    const house = character.house;

    // Checking if the house name already exists in the houseMap
    // Using the '.hasOwnProperty' method to check if a property exists in an object.
    // It returns a boolean value indicating whether the object has the specified property.

    if (houseMap.hasOwnProperty(house)) {
      // If the house name exists, incrementing the member count by 1
      houseMap[house].members++;
    } else {
      // If the house name does not exist, adding the house to the houseMap with an initial member count of 1
      houseMap[house] = { house, members: 1 };
    }
  }

  // Converting the houseMap object into an array of house objects
  const sizes = Object.values(houseMap);

  // Finally, returning the sizes array that contains objects for each house with the name of the house and the number of members
  return sizes;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  // Solution

};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the maximum number found', () => {
    expect(maxInArray([4, 2, 7, 5, 9, 2])).toStrictEqual(9);
  });
  test('It should handle negatives and return the maximum number found', () => {
    expect(maxInArray([4, -2, -7, 5, -9, 2])).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if the value is in the object', () => {
    expect(checkValues({ class: '301' }, '301')).toBe(true);
  });

  test('It should return false if the value is not in the object', () => {
    expect(checkValues({ class: '301' }, '401')).toBe(false);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an an array of names and numbers', () => {
    const startingObj = {
      'Grace Hopper': '222-303-5938',
      'Ada Lovelace': '222-349-9842',
      'Alan Turing': '222-853-5933'
    };

    expect(updateNumbers(startingObj).includes('Grace Hopper: 222-303-5938')).toBe(true);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)[0]).toStrictEqual('Stark');
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});


describe('Testing challenge 6', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

xdescribe('Testing challenge 8', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(27);
  });
});

xdescribe('Testing challenge 9', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)[1]).toStrictEqual({ house: 'Arryn', members: 3 });
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

xdescribe('Testing challenge 10', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)[2]).toStrictEqual({ house: 'Lannister', members: 4 });
  });
});
