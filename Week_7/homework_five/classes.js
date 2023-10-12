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
  }
}
// DVD
// director, runtime
class DVD extends itemTypeInfo {
  constructor(id, title, director, runtime, publishYear, value) {
    super(id, title, publishYear, value);
  }
}
// CD
// artist, number of songs
class CD extends itemTypeInfo {
  constructor(id, title, artist, songs, publishYear, value) {
    super(id, title, publishYear, value);
  }
}
