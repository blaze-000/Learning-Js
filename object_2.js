
//Object Literal
const JsUser = {
  name: "Blaze",

  FullName: "Asmit Sah",
  age: 18,
  email: "asmitsah36@gmail.com",
  isLoggedIn: false,
  LastLogin: new Date(),
};

console.log(JsUser.FullName); // this is one way to access the property using .(dot)
console.log(JsUser["name"]); // this is another way to access the property using [] (bracket)

function greet() {
  console.log("Hello");
}