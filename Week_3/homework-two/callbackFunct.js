// Variables
// DOM
let paragraphTags = document.getElementsByTagName("p");
let numberPara = document.querySelector(".numbers");
let totalValuePara = document.querySelector(".totalValue");
let averagePara = document.querySelector(".average");
// Numbers
let num1 = 50;
let num2 = 5;

// Print to Console
console.log(paragraphTags);
// console.log(numberPara);
// console.log(totalValuePara);
// console.log(averagePara);

// Write numbers to paragraph
numberPara.innerHTML = "Numbers Chosen: " + num1 + " & " + num2;

// Find Average Function
function findAverage(total, num) {
    let mean = total / num; // Get the total divided by the set of numbers

    // Print to console mean
    console.log(mean);
    // Display Mean value
    averagePara.innerHTML = "Average: " + mean;
}

// Higer order function
// parameters: two numeric values, and a callback function
function arithmeticFinder(x, y) {
    // find the arithmetic values of addition, subtraction, multiplication and division of the two numbers
    // Addition
    let sumAddition = x + y;
    // Subtraction
    let sumSubtract = x - y;
    // Multiplication
    let sumProduct = x * y;
    // Division
    let sumQuotient = x / y;
    // Total Value
    let totalValue = sumAddition + sumSubtract + sumProduct + sumQuotient;

    findAverage(totalValue, 2);

    // Print to console each of the values
    console.log(sumAddition);
    console.log(sumSubtract);
    console.log(sumProduct);
    console.log(sumQuotient);
    console.log(totalValue);

    // Display the total value to Paragraph
    totalValuePara.innerHTML = "Total: " + totalValue;
}

// Call higer order function.
arithmeticFinder(num1, num2);
