// Array collection for students
const students = [
  { name: "Alice", grades: [85, 92, 78, 90] },

  { name: "Bob", grades: [75, 88, 95, 100] },

  { name: "Charlie", grades: [60, 72, 68, 74] },

  { name: "David", grades: [92, 88, 95, 98] },

  { name: "Eve", grades: [100, 100, 100, 100] },
];

// DOM Variables
let pTags = document.getElementsByTagName("p"); // Target all "p" tags
let sLists = document.getElementsByClassName("sList"); // Student list
let studentAvgs = document.getElementById("studentAvgs"); // Student Averages

console.log(pTags);
console.log(sLists);
console.log(studentAvgs);

// display the name of each student
students.forEach(function (key) {
  //   console.log(key.name); // Print each student key
  sLists[0].innerHTML += `<br/>` + " " + key.name + " ";
});

// Using the "every()" method
//// check if all students have passed the class. Students need a 60 or higher to pass
// Print to console the student's grade
// console.log(students[1]);
// console.log(students[1].grades);

let hasPassed = students.every(function (value) {
  return value > 60;
});
console.log("Has Every student passed the class? ", hasPassed);
pTags[1].innerText += " " + hasPassed; // Display result into HTML file

// Using the some() method
//// Check if at least one student has achieved a perfect score in the class. (All grades are 100.)
let hasPerfect = students.some(function (value) {
  console.log(value.grades);
  return value.grades == 100; // Return False?
});
console.log(hasPerfect);
pTags[2].innerText += " " + hasPerfect;

// function hasPerfectScore(arr) {
//   return arr.some(function (value) {
//     console.log(value.grades);
//     value.grades.some(function (value) {
//       return value == 100;
//     });
//   });
// }

// console.log(hasPerfectScore(students));

// Filter()
//Use the filter() method to create the result of all the students with the average grade of 90 or higher

let averageGrade = students.filter(function () {});

console.log();

// Use the map method to create a new array called studentSummaries
// Name: [student name] , Average Grade: [average grade]

// Use the reduce method to calculate the total number of grades across all students
