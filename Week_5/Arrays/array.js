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

// Map
