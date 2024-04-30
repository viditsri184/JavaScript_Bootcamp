// Primitive :
/*
These are call by value
7 Types : String, Boolean, Number, null, undefined, Symbol, BigInt
 */

// Reference / Non-Primitive type: 

// Dynamically typed language

const id = Symbol('1241');
const anotherId = Symbol('1231');

console.log(id === anotherId);

// const bigNumber = 14414124141421

/*
Array, Objects, Functions
 */

const fruits = ["apple", "mango" , "guava"];

let myObj = {
    name: "Vidit",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}


// ++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "xyz.com";

let anotherName = myYoutubeName;
anotherName = "abc.com";

console.log(myYoutubeName);
console.log(anotherName);

let user1 = {
    email : "user@google.com",
    upi_id : 1231,
    name : "ABC",
}

let user2 = user1;

user2.name = "XYZ";

console.log(user1.name);
console.log(user2.name);