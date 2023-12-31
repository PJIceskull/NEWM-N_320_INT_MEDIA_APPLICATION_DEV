// Variables
divTag = document.querySelector("div"); // Target the div tag element in the html file.
// divTag.innerHTML = "asdad";

// Set fetch data to a variable
let dogImageFetch = fetch("https://dog.ceo/api/breeds/image/random/20");
// To get Error
// let dogImageFetch = fetch("https://dogs.ceo/api/breeds/image/random/20");

// Function that calls the API
async function getDogImages() {
  // API call
  //   const dogImages = await fetch("https://dog.ceo/api/breeds/image/random/20");
  const dogImages = await dogImageFetch;

  //Format into json
  const results = await dogImages.json();

  return results;
}

// Create async function that takes the fetched data and displays it in the HTML file
async function createImageTag(imageURL) {
  const imageTag = document.createElement("img");
  // Insert Parameter / Text / url into img src
  imageTag.src = imageURL;
  divTag.appendChild(imageTag);
}

// Call Function
getDogImages()
  .then(function (data) {
    // Print to console the JSON data
    console.log(data);
    // In, console the JSON prints out Image URL
    // Use the Image URL inside of a image Tag

    // Test function using console log
    // console.log(data.message);
    data.message.forEach(function (value) {
      //   console.log(value);
      // Call createImageTag function
      createImageTag(value);
    });
  })
  .catch((error) => {
    console.log("Failed to fetch data.");
    //   Display error msg to html
    divTag.innerHTML = "Failed to fetch data.";

    console.error();
  });
