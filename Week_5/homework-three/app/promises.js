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
    console.log(data);
    // document.getElementsByTagName("body");
    // Target body tag
    bodyTag = document.querySelector("body");
    // document.querySelector("body").innerText = data.results[0].author;

    //   Use loop to print out values
    // for (i = 0; i < 20; i++) {
    //   console.log(data.results[i].author);
    //   console.log(data.results[i].content);
    // }

    data.results.forEach(function (value) {
      console.log(value.author);
      console.log(value.content);
      // bodyTag.innerHTML += value.author;
      createPara(`${value.author} \n ${value.content}`);
    });
  })
  .catch((error) => {
    console.log("There was an error");
    console.error();
  });
