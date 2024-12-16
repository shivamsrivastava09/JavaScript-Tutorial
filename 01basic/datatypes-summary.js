/*
    7 Primitive Data Types (call by value)
    String, Number, Boolean, Null, Undefined, Symbol, BigInt

    Non-Primitve Data Types (call by refernce)
    Array, Objects, Functions

*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false symbol is for defining something uniquely.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    Types of Memory
    1. Stack Memory (Primitive)
    2. Heap Memory  (Non-Primitive)

*/

let myYoutube = "hiteshchoudhary"
let anotherName = myYoutube
console.log(anotherName);
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutube);

let userOne = {
    email:"abc@google.com",
    upi:"shv@ibl"
}

let userTwo = userOne
userTwo.email = "def@google.com"

console.log(userOne.email);
console.log(userTwo.email);


