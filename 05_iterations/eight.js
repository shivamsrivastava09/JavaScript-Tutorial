// Reduce Method.

const myNum = [1,2,3]

const total = myNum.reduce((acc, currval) => {
    console.log(`accumulator is ${acc} and Current Value is ${currval}`);    
    return acc+currval
},0)

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "MERN Stack",
        price : 5000
    },
    {
        itemName : "React",
        price : 3299
    },
    {
        itemName : "Java Full Stack",
        price : 6999
    },
    {
        itemName : "Data Science",
        price : 12999
    }
]

const myTotal = shoppingCart.reduce((acc, item) => {
    return acc+item.price
},0)

console.log(myTotal);
