const accountId = 144553
let accountEmail = "shivam0174srivastava@gmail.com"
var accountPassword = "123456"
accountCity = "Gorakhpur"
let accountState
// accountId = 2 not aaloowed

accountEmail = "shivamsrivastava@gmail.com"
accountPassword = "789456"
accountCity = "Noida"

console.log(accountId);
console.log(accountEmail);

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])

/*
Prefer not to use var 
because of issue in block scope
*/
