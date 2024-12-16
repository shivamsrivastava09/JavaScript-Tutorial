console.log("2">1); // true
console.log(null>0); // false
console.log(null==0); // false
console.log(null >= 0); // true



/*
the reason is that an equality check == and comparisons ><>=<= wok differently.
Camparisons convert null to a number and treat it as 0.
*/


// Strick Check

console.log("2" == 2);// true
console.log("2" === 2);// false


