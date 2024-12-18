// Arrays

const myArr = [0,1,2,3,4,5]
// console.log(myArr);

// // Arrays Methods :

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// myArr.includes(5) // boolean whether the element is present or not.
// console.log(myArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myArr);
console.log("B ", myn1);
const myn2 = myArr.splice(1,3) // splice excludes the element present b/w these indexes and make the changes in the original array.
console.log(myn2);
console.log(myArr);



