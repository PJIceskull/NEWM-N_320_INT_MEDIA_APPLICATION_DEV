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

// check if all students have passed the class. Students need a 60 or higher to pass

console.log(students[1]);
console.log(students[1].grades);

// function hasPassed() {
//   students.forEach(function (key) {
//     console.log(key.grades);
//     key.grades.forEach(function (value) {
//       if (value > 60) {
//         console.log(value);
//         return key.name;
//       }
//     });
//   });
// }

// console.log(hasPassed());

// Use the some method to check if at least one student has achieved a perfect score in the class. (All grades are 100.)
