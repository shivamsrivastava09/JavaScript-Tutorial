function sayMyName(){
    console.log("My name is John");
}

// sayMyName()

function addTwoNumber(number1, number2){
    return number1+number2
}

const result = addTwoNumber(45,14)
// console.log(result);

function loginUserMessage(username = "sam"){
// default value of username is sam
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shivam"))

function calculateCartPrice (...num1){
    // Spread Operator ...
    return num1    
}

//console.log(calculateCartPrice(200,400,600,800))

const user = {
    username:"Shivam",
    price:199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)