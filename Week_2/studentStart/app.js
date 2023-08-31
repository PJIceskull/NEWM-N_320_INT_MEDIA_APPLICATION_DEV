// Variables
let musicGenres = ["Jazz", "Rock", "Drum & Bass", "R&B", "Hip-Hop"]; // Musical Genres
let sectionTags = document.getElementsByTagName("section"); // target the elements with the "section" tag
let paragraphTag = document.getElementsByTagName("p"); // Target all elements with the "p" tag

// Print to console the variable names.
console.log(musicGenres);
console.log(sectionTags);
console.log(paragraphTag);

// for Loop made for arrays
// for(type of musicGenres) {
//   console.log(type);
// }

// Music List
for (let i = 0; i < musicGenres.length; i++) {
  // const element = sectionTags[i];
  // Variable that holds the index of musicGenre Array & <br> tag
  let GenreText = musicGenres[i] + `</br>`;
  sectionTags[0].innerHTML += GenreText;
}

// Music Preference
for (let i = 0; i < 1; i++) {
  let favoriteGenre = "My favorite genre of music is " + musicGenres[0] + ".";
  paragraphTag[2].style.color = "red";
  paragraphTag[2].innerText += favoriteGenre;
}

// Animal Function
function animals(breed, color) { 
  document.getElementById('animals').innerHTML += "I have a " + breed + " that is " + color + ".";
}
animals("German Shepherd", "black");

// Change the Color
let colorButton = document.getElementsByTagName('button');

function getName(){
  let userName = document.getElementById('myName').value;
  let color = prompt("Welcome "+ userName + "! What is your favorite color?");
  document.getElementsByTagName('body')[0].style.backgroundColor = color;
}
colorButton[0].addEventListener('click', getName);