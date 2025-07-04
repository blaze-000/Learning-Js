// // function camelize(str) {
// //   return str.split('-').map((word,index) => index ===0 ? word : word[0].toupperCase() + word.slice(1)).join('');
// // }

// function filterRange(arr, a ,b){
//   return arr.filter((item) => item <= a && item >=b);
// }

// let arr = [5, 3, 8, 1];
// console.log(filterRange(arr, 1, 4));

// function unique(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(strings)); // Hare, Krishna, :-O

// function reverseString(str){
//   return str.split('').rever
// }s

// console.log(reverseString("Hello there")); // "olleH"



// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");
// player1.sayName(); // logs 'steve'
// player2.sayName(); // logs 'also steve'

// console.log(player1.name); // logs 'steve'
// console.log(player2.name); // logs 'also steve' 

// Object.getPrototypeOf(player1) === Player.prototype; // returns true
// Object.getPrototypeOf(player2) === Player.prototype; // returns true




function Book(title, author, pages, isRead){
  if(!new.target){
    throw Error("Book must be called with new keyword");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.sayInfo = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read' : 'not read yet'}`;
  }

}

console.log(new Book("The Alchemist", "Paulo Coelho", 208, true).sayInfo());


