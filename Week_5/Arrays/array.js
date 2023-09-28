// ARRAY METHODS //

// For Each
let arr = [1, 2, 3];
arr.forEach(function (value) {
  console.log("For Each Value: " + value);
});

function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function (value) {
    newArr.push(value * 2);
  });
  return newArr;
}
console.log("Double Values: ", doubleValues(arr));

// Every
//  Only boolean values
var eArr = [-1, -2, -3];
var everyFn1 = eArr.every(function (value) {
  return value < 0;
});

console.log("Every Funciton 1: ", everyFn1);

var everyFn2 = eArr.every(function (value) {
  return value > -2;
});

console.log("Every Function 2: ", everyFn2);

//  Check to see if characters are all Lowercase

function allLowerCase(str) {
  // split string into an array
  return str.split("").every(function (value) {
    return value === value.toLowerCase();
  });
}

console.log("All Lowercase 1: ", allLowerCase("this is a sentence"));

console.log("All Lowercase 1: ", allLowerCase("Today is Thursday"));

//  Check to see if all array values are arrays
function allArrays(arr) {
  return arr.every(Array.isArray);
}

console.log("All Arrays 1: ", allArrays([[1, 2], ["Dog", "Cat"], [3], [true]]));
console.log("All Arrays 2: ", allArrays([[1, 2], ["Dog", "Cat"], [3], true]));

// Some
//  Only boolean values
let sArr = [10, 20, 30];
var someFn1 = sArr.some(function (value) {
  return value < 20;
});
var someFn2 = sArr.some(function (value) {
  return value < 5;
});

console.log("Some Method: ", someFn1);
console.log("Some Method: ", someFn2);

//  Check if values are even or odd
function hasEvenNum(arr) {
  return arr.some(function (value) {
    return value % 2 == 0;
  });
}

console.log("Has Even Number: ", hasEvenNum([1, 2, 3, 4, 5])); // has a even number
console.log("Has Even Number: ", hasEvenNum([11, 21, 31, 43, 55])); // has only odd Numbers

// Filter

let classList = ["N125", "N220", "N320", "N317", "N423", "N215"];

function upperLevel(arr) {
  return arr.filter(function (value) {
    return value.substr(1, 3) >= 300;
  });
}

console.log("Class Filter: ", upperLevel(classList));

// Array of objects
let students = [
  { first: "Greg", last: "Smith", employed: true },
  { first: "Sally", last: "Richards" },
  { first: "Jake", last: "Farmer", employed: true },
  { first: "Kelsey", last: "Rogers" },
];

function filterByIndex(arr, key) {
  return arr.filter(function (value) {
    return !value[key];
  });
}
console.log("Not Employed: ", filterByIndex(students, "employed"));

let students2 = [
  { first: "Greg", last: "Smith", employed: true },
  { first: "Sally", last: "Richards", employed: false },
  { first: "Jake", last: "Farmer", employed: true },
  { first: "Kelsey", last: "Rogers", employed: false },
];

console.log("Not Employed 2: ", filterByIndex(students2, "employed"));

// Map
let mArr = [2, 3, 4, 5, 6];

let mapArray = mArr.map(function (value, index) {
  return {
    // Array of Objects
    key: index,
    value: value * value,
  };
});

console.log("Squared: ", mapArray);
//  First names only
function firstNames(arr) {
  return arr.map(function (value) {
    return value.first;
  });
}

console.log("Only First Names: ", firstNames(students2));

//  Value * Index
function vtIndex(arr) {
  return arr.map(function (value, index) {
    return value * index;
  });
}

console.log("Value Time Index: ", vtIndex([2, 5, 9]));

// Reduce()
// Reduce() has two parts: callback & initialValue
// Callback: accumulator, nextValue

let reduceArr = [1, 2, 3, 4, 5];

let reduceFn = reduceArr.reduce(function (accumulator, nextValue) {
  return accumulator + nextValue; // Add all the values inside the array + the intitalValue: 10
}, 10);
let reduceFn2 = reduceArr.reduce(function (accumulator, nextValue) {
  return accumulator + nextValue; // Add all the values inside the array
});

console.log("Reduce Fn 1: ", reduceFn);
console.log("Reduce Fn 2: ", reduceFn2);

//  Using a string value
let family = ["William", "Abigail", "Richie"];
// Output: My Family members are William Abilgail Richie

let nameFunction = family.reduce(function (accumulator, nextValue) {
  return (accumulator += "" + nextValue);
  // return (accumulator = accumulator + "" + nextValue);
}, "My Family is");

console.log("Name Reduction: " + nameFunction);
