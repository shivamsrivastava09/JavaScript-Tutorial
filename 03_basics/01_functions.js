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
console.log(loginUserMessage("Shivam"))