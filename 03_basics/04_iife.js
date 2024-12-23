// Immediately Invoked Function Expressions (IIFE)
// Immediately Invoked Function Expressions (IIFE) are functions that are defined and called immediately.
// They are useful for creating a scope for variables and functions, and for avoiding polluting the global

//named IIFE
(function chai(){
    console.log("Hello, World!");
})(); // semi-colon is needed. help to end the code

(function hai(name){
    console.log(`hello Mr. ${name}`);
})("Shivam");

((name) => {
    console.log(`welcome, ${name}`);
})("Shivam");