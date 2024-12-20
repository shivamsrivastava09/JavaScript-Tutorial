// singleton through contructors
Object.create
// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Shivam",
    [mySym]:"myKey1",
    age: 24,
    location: "Noida",
    email: "shivam0174srivastava@gmail.com",
    lastLoginDays: ["monday","saturday"]
}
console.log(JsUser.email);
console.log(JsUser["location"]);
console.log(JsUser[mySym]);

JsUser.email = "shivam@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "shivamsrivastava@gmail.com" // this will not propagate in the object as the object is freezed in the line number 18.
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




