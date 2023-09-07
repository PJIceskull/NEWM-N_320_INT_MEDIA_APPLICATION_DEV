// Set Timeout
setTimeout(function () {
  console.log("Time's Up");
}, 2000);

function callback() {
  console.log("Callback Function!");
}

setTimeout(callback, 1000);

// SetInterval
function cb() {
  console.log("callback is called continuously");
}
// setInterval(cb, 3000); //runs every 3000 secs

var num = 0;
var intervalId = setInterval(function () {
  num++;
  console.log(`Current Number: ${num}`);
  if (num === 5) {
    console.log(intervalId);
    clearInterval(intervalId);
  }
}, 1000);

// Foreach
var arr = [1, 2, 3, 4, 5];

function forLoopArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
forLoopArray(arr);
// Simpifiy Ver
// Foreach function parameters: item, index, array
// forEach(arr, function(number) {
//     console.log(number*2);
// });

arr.forEach(function (number) {
  console.log(number * 2);
});

var instruments = ["drums", "guitar", "keyboard"];
// drums guitar keyboard
var results = [];
// forEach(instruments, function (item, index, arr) {
//   if (arr.length - 1 !== index) {
//     results += item + "";
//   } else {
//     results += item + "!!";
//   }
// });
instruments.forEach(function (item, index, arr) {
  if (arr.length - 1 !== index) {
    results += item + " ";
  } else {
    results += item + "!!";
  }
});

console.log(results);
