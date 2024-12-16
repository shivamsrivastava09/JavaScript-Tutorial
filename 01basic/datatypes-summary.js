/*
    7 Primitive Data Types (call by value)
    String, Number, Boolean, Null, Undefined, Symbol, BigInt

    Non-Primitve Data Types (call by refernce)
    Array, Objects, Functions

*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false symbol is for defining something uniquely.
