// if statement 
/*
    if(condition){
    
    }
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allowed to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");    
}