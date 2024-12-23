const user = {
    username: "Shivam",
    age: 20,
     wlecomeMessage : function(){
        console.log(`${this.username}, welcome to this website.`);
     }
}
user.username = "Ankit"
user.wlecomeMessage()
console.log(this);


function chai(){
    let  username = "Abhishek"
    console.log(this.username); // this will not allowed this keyword is only allowed with objects.
    
}
// chai()

// arrow function 

const chai = () => {
    let username = "Shivam"
    console.log();
      
}

// basic syntax : const addTwo = (num1, num2) => {
//  return num1 + num2
//}

/*
Implicit arrow function : const addTwo = (num1, num2) => (num1 + num2)
*/
