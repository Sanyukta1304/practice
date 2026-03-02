//map function
let nums = [1, 2, 3, 4, 5,6];
console.log(nums);
//map function is used to create a new array by applying a function to each element of the original array.
nums.map((num)=>console.log(num));
//map function with return value
var map_arr = nums.map((num)=>num*num);
console.log(map_arr);

//reduce function
//reduce function is used to reduce an array to a single value by applying a function to each element of the array.
//var reduce_arr = nums.reduce((accumulator,currentValue)=>accumulator+currentValue , 0);
//console.log(reduce_arr);

//Json object
car = {
    "make": "Toyota",   //property: value
    "model": "Camry",
    "year": 2020,
    "color": "red",
    "gears": [1, 2, 3, 4, 5]
};

console.log(car.make);
console.log(car["model"]);
console.log(car);

//functions
function greet(){  //function is a data type that can be called to perform a specific task.
   console.log(`Hello, welcome to JavaScript!`);
}   
greet(); //calling the function

//type of function
function greet() {
    console.log(`Hello, welcome to JavaScript!`);
}

console.log(typeof greet); //function is a data type in JavaScript

//variable that holds a function expression
var func = function greet() {
    console.log(`Hello, welcome to JavaScript!`);
}

console.log(func()); //calling the function expression
 