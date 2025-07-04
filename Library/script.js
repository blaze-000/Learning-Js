// let myLibrary = [];

// class Book {
//       constructor(id, title, author, pages,read) {
//             this.id = id;
//             this.title = title;
//             this.author = author;
//             this.pages = pages;
//             this.read = read || false; // Default to false if not provided
//       }
//       toggleRead() {
//             this.read = !this.read;
//       }
// }



// function addBookToLibrary(title, author, pages) {
//   const book = new Book(crypto.randomUUID(), title, author, pages);
//   myLibrary.push(book);
//   return book;
// }


function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();