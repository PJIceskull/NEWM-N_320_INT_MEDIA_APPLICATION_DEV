// 3 states: pending, fulfilled, rejected

let basicPromise = new Promise(function(resolve, rejected) {
    let x = 12;
    if (x == 10) {
        resolve();
    } else {
        rejected();
    }
});

basicPromise.then(function () {
    document.write("Basic Promise Resolved");
}, function () {
    document.write("Basic Promise is Rejected");
})

// Another basic function using catch
const cPromise = new Promise(function(resolve, rejected) {
    let newNum = Math.random();
    if (newNum < 0.5) {
        resolve(newNum);
    } else {
        rejected(newNum);
    }
});

cPromise.then(function (num) {
    console.log("Promise resolved: ", num);
}).catch((function(num) {
    console.log("Promise reject: ", num);
}))

// Promise with a setTimeout
const rNumPromise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let randNum = Math.floor(Math.random() * 10) + 1;
        resolve(randNum)
    }, 2000);
})

rNumPromise.then(function(data) {
    console.log("SetTimeout Promise Resolved: ", data);
})

console.log("SetTimeout Initiated");

// Promise Chaining
const promiseChain = new Promise(function(resolve, reject){
    resolve(5);
});

promiseChain.then(function(data) {
    return data*2;
}).then(function(data) {
    return data + 20;
}).then(function (data) {
    console.log(data);
})

// Data from an external source
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log("Fetch Promise: " , fetchPromise);

fetchPromise.then(function(response) {
    const jPromise = response.json();
    jPromise.then(function (data) {
        console.log("Data Received: " + data[2].name);
    });
});