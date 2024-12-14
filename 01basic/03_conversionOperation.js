let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber); // output : NaN (not a number)

// when you convert a null into a number it will be 0.

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// "" => false
// "shivam" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));


