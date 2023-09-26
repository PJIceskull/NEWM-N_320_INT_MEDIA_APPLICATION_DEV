// Fetch data from api
let quoteFetch = fetch("https://api.quotable.io/quotes?limit=20");

// Async function to fetch quote data
async function getQoute() {
  // API call
  // const quoteFetch = await fetch("https://api.quotable.io/quotes?limit=20");
  const quotes = await quoteFetch;

  //Format into json
  const results = await quotes.json();

  return results;
}

// Function for display text in HTML files
async function createPara(text) {
  const paraTag = document.createElement("p");
  // Insert Text using parameter & innerText
  paraTag.innerText = text;
  document.querySelector("body").appendChild(paraTag);
}

// createPara("Apples");

getQoute()
  .then((data) => {
    //   Print to console JSON Data
    console.log(data);
    // Target body tag
    bodyTag = document.querySelector("body");

    data.results.forEach(function (value) {
      // Test out function using console log
      console.log(value.author);
      console.log(value.content);
      // bodyTag.innerHTML += value.author;
      createPara(` "${value.content}" \n - ${value.author} \n `);
    });
  })
  .catch((error) => {
    console.log("There was an error");
    console.error();
  });
