const User = {
    email: "some@gmail.com",
    fullname:{
        username:{
            first: "John",
            last: "Doe"
        }
    }
}
console.log(User.fullname.username.first);
// joining of objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);

const tinderUSer = {
    id:1,
    email:"sa@gmail.com",
    phone:7412589630
}

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

// de-structing

const course = {
    courseName: "JavaScript",
    amount: 999,
    courseInstructor: "Shivam"
}

const {courseInstructor: Instructor} = course
console.log(Instructor);
