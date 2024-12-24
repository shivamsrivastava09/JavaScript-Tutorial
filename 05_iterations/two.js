// While Loop

/*
    initialization
    while(condition){
    updation
    }


 // Do While
 
    initialization
    do{
    updation
    }while(condition)
*/

const myArray = ["Super-Man", "Bat-Man", "Flash", "Wonder-Women"]
let arr = 0
while(arr<myArray.length){
    process.stdout.write(myArray[arr]); // this is used to print in the single line over nodejs
    process.stdout.write(', ');
    arr++
}