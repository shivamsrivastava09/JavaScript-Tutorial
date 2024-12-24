// for of loop

/*
    
*/

const arr = ["Jaipur", "Mumbai", "Banglore"]
for (const ar of arr) {
  //  console.log(ar);     
}

// Maps

const map = new Map()
map.set("1","2")
map.set("3","4")
map.set("5","4")
//console.log(map);

for (const element of map) {
    console.log(element);
        
}
// for-of loop doesn't work for Objects.
// We can use Object.entries() method to get an array of key-value pairs and then use for