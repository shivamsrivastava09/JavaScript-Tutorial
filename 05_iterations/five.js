const coding = ["js", "ruby", "java", "python"]

coding.forEach( function(item){
    //console.log(item)
})

// using arrow function

coding.forEach((item)=>{
//    console.log(item)
})

function printMe(item){
    console.log(item);
}

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : ".js"
    },
    {
        languageName : "Java",
        languageFileName : ".java"
    },
    {
        languageName : "python",
        languageFileName : ".py"
    }

]

myCoding.forEach((item) => {
    console.log(item.languageName, " ", item.languageFileName);
    
})