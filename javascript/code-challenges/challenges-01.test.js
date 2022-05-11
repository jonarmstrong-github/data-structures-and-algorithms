'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named `addOne` that takes an array of numbers, and returns a new array of the numbers, incremented by 1.

Use `forEach` to loop over the input array and work with each value.  Push the new value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addOne = (arr) => {   //the addOne function is defined and arr parameter is created to hold the function argument
  // Solution code here...
  let newArr = [];          //created an array to work in
  arr.forEach(value => {    //for each index in the array a value is pulled
    let temp = value +1;    //temporary storage is created and is filled with the value from the array + 1.
    newArr.push(temp);      //the new value is pushed into the new array
  });
  return newArr;            //newArr must be returned to addOne.  Would not be needed in a 'one liner'.
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named `addExclamation` that takes an array of strings, and returns a new array of the same strings with an "!" added to the end.

Use `forEach` to loop over the input array. Modify each string, and add the updated value into a local array. Return the local array;
------------------------------------------------------------------------------------------------ */

const addExclamation = (arr) => {       //the addExclamation function is defined and arr parameter is created to hold the function argument
  // Solution code here...
  let newArr = [];                      //created an array to work in
  arr.forEach(value => {                //for each index in the array a value is pulled
    let temp = (value + '!');           //temporary storage is created and is filled with the value from the array + '!'
    // let temp = (value.concat('!'));  //this also worked
    newArr.push(temp);                  //the new value is pushed into the new array
  });
  return newArr;                        //newArr must be returned to addExclamation.  Would not be needed in a 'one liner'.
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named `allUpperCase` that takes an array of strings, and returns a new array of the strings converted to upper case.

Use `forEach` to loop over the input array. The modified strings should each be added into a local array. Return that local array.
------------------------------------------------------------------------------------------------ */

const allUpperCase = (arr) => {       //the allUpperCase function is defined and arr parameter is created to hold the function argument
  // Solution code here...
let newArr = [];                      //created an array to work in
  arr.forEach(value => {              //for each index in the array a value is pulled
    let temp = value.toUpperCase();   //temporary storage is created and is filled with the new upper case value
    newArr.push(temp);                //the new value is pushed into the new array
  });
  return newArr;                      //newArr must be returned to allUpperCase.  Would not be needed in a 'one liner'.
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named `greeting` that takes in a single string and returns the string in all uppercase letters, and followed by an "!".

Then, write a function named `speaker` that takes in an array of strings and a callback function. 

Use `forEach` to build a new array of strings, each string modified by the callback. Return the new array. 
------------------------------------------------------------------------------------------------ */

const greeting = (word) => {          //the greeting function is defined and word parameter is created to hold the function argument
  // Solution code here...
    let temp = word.toUpperCase();   //temporary storage is created and is filled with the new upper case value
    temp = (temp + '!');              //temporary storage is referenced and then refilled with the value from the array + '!'
  return temp;                      //temp must be returned to greeting.  Would not be needed in a 'one liner'.
};

const speaker = (words, callback) => {  //the speaker function is defined and parameters are created to hold the function arguments
  // Solution code here...
  let newArr = [];                    //created an array to work in
  words.forEach(value => {             //for each index in the array a value is pulled
    let temp = callback(value);       //the value is given to the callback function as an argument and stored in temp
    newArr.push(temp);                //the new value in temp is pushed into an array.
  });
  return newArr;               //newArr must be returned to speaker.
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */
//gone over in class

const addValues = (arr, value) => {  //the addValues function is defined and parameters are created to hold the function argument
  // Solution code here...
  arr.push(value)                     //the value provided to the function is pushed into the array provided to the function
};

const addNumbers = (num, arr, times, callback) => {   //the addNumbers function is defined and parameters are created for the function arguments
  // Solution code here...
  for (let index = 0; index < times; index++) {  //a for loop will run the number of times requested by the function parameters 
    callback(arr, num);                          //the function called by arguments will receive an array and a number
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store inventory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */
//gone over in class

const createList = (availableItems) => {    //the createList function is defined and a parameter is created to hold the function argument
  // Solution code here...
  let newArr = [];                          //created an array to work in
  availableItems.forEach(items => {         //for each index in the array a value(object) is pulled
    if (items.available) {                   //if item object property available = true
      newArr.push(items.name)                //then push item's name into new array
    }
  });
  return newArr;                          //newArr must be returned to speaker.
};

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

const fizzbuzz = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an array with 1 added to each value of the original array', () => {
    expect(addOne([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5, 6]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array with an exclamation point added to each value of the original array', () => {
    expect(addExclamation(['hi', 'how', 'are', 'you'])).toStrictEqual(['hi!', 'how!', 'are!', 'you!']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return an array of uppercase strings', () => {
    expect(allUpperCase(['hi', 'how', 'are', 'you'])).toStrictEqual(['HI', 'HOW', 'ARE', 'YOU']);
  });
});

describe('Testing challenge 4', () => {
  test('It should provide an array of strings, that get uppercased, and a "!" at the end', () => {
    expect(speaker(['hello', '301', 'students'], greeting)).toStrictEqual(['HELLO!', '301!', 'STUDENTS!']);
  });
});

describe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 7', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
