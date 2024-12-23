const userEmail = "shivam@gmail.com"
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Didn't got the user Email");  
}

/*
    falsy value :
    false, 0, -0, 0n(in BigInt), "", null, undefined, NaN

    truthy value :
    "0", 'false', " ", [], {}, function(){}

*/

// Nullish Coalescing Operator (??) : null undefined
let user
user = null ?? 10 // instead of 10 actually we write a complex function that calls the database and returns something or if it doesn't return something further code can be adjusted for null.
console.log(user) // 10

// Terniary Operator
// condition ? true : false