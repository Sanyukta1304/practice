//loops 
// for loop
for(let i=0; i<5; i++){
    console.log(i);
}       

jobj={
    name:'john',
    age:30,
    city:'new york'
}
//for in loop   
for(let key of Object.keys(jobj)){
    console.log(jobj[key]); 
}

//for in loop - iterates over the keys of an object, while for of loop iterates over the values of an iterable object like an array.
for(let key in jobj){
    console.log(`jobj[${key}]=${jobj[key]}`); 
}   

//callback function
function greet(name,func){
    console.log(`hello ${name}`);
    func(name);
}   

function goodbye(){
    console.log(`goodbye`);
}       

function goodbye2(name){
    console.log(`goodbye, ${name}`);

greet('john',goodbye2);
}

//for each loop
function forEach(arr, func){
    for(let ele in arr) {
        func(arr[ele]);
    }
}

let arr=[1,2,3,4,5];
forEach(arr, (num) => console.log(num));


//map function
var map_arr =arr.map(num => num*num);
console.log(map_arr);