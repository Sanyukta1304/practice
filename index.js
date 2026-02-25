// VARIABLES & DATA TYPES EXAMPLE

// number
let a = 9;
console.log("Initial value of a:", a);

// reassigning (allowed with let)
a = "Hello World";  
console.log("After reassignment:", a);

// constant (cannot be changed)
const PI = 3.14;
console.log("Value of PI:", PI);

// checking data types
console.log("Type of a:", typeof a);
console.log("Type of PI:", typeof PI);

// string
let name = "John";
console.log(name);
console.log(typeof name);

//single inverted commas in string
let Name = "let's learn JavaScript!";
console.log(Name);

//include double inverted commas in string 
let naame = '"hello world"';
console.log(naame);

//backtricks in string
let Naame = `This is a string with backticks "hello world"`;
console.log(Naame);

// boolean 
let isJavaScriptFun = true;
console.log("Is JavaScript fun?", isJavaScriptFun);

//null 
let emptyValue = null;
var undefinedValue;
console.log( emptyValue);
console.log(typeof undefinedValue);


//number,boolean, string and undefined are the primitive data types in JavaScript.
//null does not have a data type of its own, it is considered an object in JavaScript.

//object data type[arrays]
// 1) arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(typeof fruits);
            // arrays can hold multiple values of different data types
            // 0  1  2  3  4  5       6      7 
let numbers = [1, 2, 3, 4, 5,"hello",true,[6,7,8]];
console.log(numbers);
console.log(typeof numbers);

//accesing the elements of an array
console.log(numbers[0]); // 1
console.log(numbers[5]); // "hello"
console.log(numbers[7]); // [6,7,8]
console.log(numbers[7][1]); // 7 (accessing nested array element)






