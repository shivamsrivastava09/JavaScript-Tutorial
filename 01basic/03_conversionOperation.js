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

// *********************Operations*******************//

let value = 3
let negValue = -value
console.log(negValue );

let str1 ="hello"
let str2 = " shivam"
let str3 = str1+str2
console.log(str3);

console.log(1+"3");  
console.log("1"+3+5);
console.log(1+3+"5");

let gameCounter = 100
gameCounter++
console.log(gameCounter);




