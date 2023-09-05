// Variables

// Working the DOM
// Return one element:
// querySelector();
// getElementbyID();
document.querySelector("div ul li:first-child").innerHTML = "querySelector";
document.querySelector(".myPara").innerHTML = "querySelector p";

// Grab a list
// use Loop to target all elements inside a list
// getElementsByClassName();
// getElementsByTagName();
// querySelectorAll();

document.getElementsByClassName("myPara")[1].innerHTML = "class name";

document.getElementsByTagName("li")[1].innerHTML = "second list item";
document.querySelectorAll("li")[2].innerHTML = "querySelectorAll";

// Callback Functions
// Synchronous Functions
// Asynchronous Functions

function callback() {
  console.log("This is a callback function.");
}

function higherOrder(newFn) {
    console.log("Before Callback");
    newFn();
    console.log("After calling function");
}

higherOrder(callback);

// Three functions
function firstFunction(msg) {
    alert(msg);
}
function middleFunction(msg) {
    console.log(msg);
}
function lastFunction(msg) {
    return confirm(msg);
}

firstFunction("My Message");
middleFunction("My Message");
lastFunction("My Message");

const startFunction = (msg, mFn) => {
    // function startFunction(msg, mFn) {}
    alert(msg);
    mFn(msg, endFunction);
}

const nextFunction = (msg, eFn) => {
    console.log(msg);
    eFn(msg);
}

const endFunction = (msg) => {
    return confirm(msg);
}

// const endFunction = (msg) => confirm(msg);

// function endFunction(msg) {
//     return comfirm(msg);
// }
startFunction('Callback message...', nextFunction);

const costTable = (subT, tip, total) => {
    let createTable = `<ul><li>SubTotal: ${subT} </li> <li>Tip: ${tip}</li> <li>Total: ${total}</li></ul>`;
    document.write(createTable);
}

const calcTotal = (subT, tip, callback, taxRate = 0.07) => {
    let total = subT + (subT * taxRate) + tip;
    total = total.toFixed(2);
    // let dinner = [subT, tip, total];
    callback (subT, tip, total);
} 

calcTotal(34.95, 10.50, costTable);