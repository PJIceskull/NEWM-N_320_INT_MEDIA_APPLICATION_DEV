// Variables
headingText = document.getElementsByTagName("h1");
descClass = document.getElementsByName("desc");

// Create a class that will hold the following info:
// id
// title
// publication year
// value
class itemTypeInfo {
  constructor(id, title, publishYear, value) {
    this.id = id;
    this.title = title;
    this.publishYear = publishYear;
    this.value = value;
  }
}

// create the individual item types, adding properties
// Book Class
// author, genre
class Book extends itemTypeInfo {
  constructor(id, title, author, genre, publishYear, value) {
    super(id, title, publishYear, value);
    this.author = author;
    this.genre = genre;
  }
}
// DVD
// director, runtime
class DVD extends itemTypeInfo {
  constructor(id, title, director, runtime, publishYear, value) {
    super(id, title, publishYear, value);
    this.director = director;
    this.runtime = runtime;
  }
}
// CD
// artist, number of songs
class CD extends itemTypeInfo {
  constructor(id, title, artist, songs, publishYear, value) {
    super(id, title, publishYear, value);
    this.artist = artist;
    this.songs = songs;
  }
}

// Create a class that includes the following methods:
// constructor()
// addItem()
// removeItem()
// totalValue()
// displayCatalog()
class catalogData extends itemTypeInfo {
  // constructor: create an empty catalog
  constructor(id, title, publishYear, value) {
    super(id, title, publishYear, value);
  }
  // addItem:
  addItem() {
    // add one or more items
  }
  // removeItem
  removeItem() {
    // remove item from the catalog by its id.
  }
  // totalValue
  totalValue() {
    // calculate and return the total value of all the catalog items.
  }
  // displayCatalog
  displayCatalog() {
    // display the items in the catalog, including
    // the titles(italicized)
    // publication data
    // value
    // additional properties specific to the media type.
  }
}
