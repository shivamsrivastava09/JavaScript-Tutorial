const marvelHeros = ["thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

//marvelHeros.push(dcHeros)
//console.log(marvelHeros);
const combine =marvelHeros.concat(dcHeros)
console.log(combine);
const newCombine = [...marvelHeros,...dcHeros]
console.log(newCombine);
const another_array = [1,2,[4,5,6],7,[85,25,[23,22]]]
console.log(another_array);
const realArray = another_array.flat(Infinity);
console.log(realArray);

console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam"));
console.log(Array.from({name:"Shivam"})); // this will return empty object as this method needs to know from which prespective it has to create a array either from key or from value.




  
