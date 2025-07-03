//singleton
const user = new Object(); // singleton object

user.id = 1;
user.name = "Asmit Sah";

const regularUser = {
  email: "asmitsah689@gmail.com",
  FullName: {
    userFullname: {
      firstName: "Asmit",
    },
  },
  isLoggedIn: true,
};
// console.log(regularUser);

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

const obj3 = Object.assign({}, obj1, obj2); // Merging two objects
const obj4 = { ...obj1, ...obj2 }; // Merging two objects using spread operator

// console.log(Object.keys(obj1)); //returns an array - now we can use loop on it
// console.log(Object.values(obj1));

//deconstructor

const {coursename, price} = {
  coursename: " JavaScript",
  price: 999,
  cousrseInstructor: "Asmit Sah",
};// accessing the properties of an object




console.log(price);


