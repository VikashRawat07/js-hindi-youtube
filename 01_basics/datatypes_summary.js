//Primitive
//7 types String, Number, Boolean, null, undefined, Symbol, BigInt
const score= 100
const scoreValue =100.3
const isLoggedIn= false
const outsideTemp= null
let usermail;
const id= Symbol('123')
const anotherId= Symbol('123')
console.log(id=== anotherId);
const bigNumber = 35343455664545n

//Reference (Non primitive)
//Array, Objects, Functions
const heroes= ["shaktiman", "naagraj", "doga"];
let myObj={
    name: "Vikash",
    age: 22,
}

const myFunction= function()
{
    console.log("hello world");
}
console.log(bigNumber)
console.log(outsideTemp)
console.log(scoreValue)
console.log(myFunction)
console.log(heroes)
console.log(anotherId)
//Stack(Primitive) Heap (Non Primitive)
let myYoutubename= "vikashdotcom"
let anothername= myYoutubename
anothername= "vikash"
console.log(myYoutubename)
console.log(anothername)
let userOne= {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo= userOne
userTwo.email = "vikash@google.com"
console.log(userOne.email)
console.log(userTwo.email)

