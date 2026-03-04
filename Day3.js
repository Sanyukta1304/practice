//variable in parameter
function greet(name) {
    console.log('hello,' + name);
}
greet('world');

function test(Name='world') {
    console.log('hello,' + Name);
}
test("neha"); 

//arguments object

function greet(a,b) {
    console.log(arguments)
}
greet(10,20)


function add(a,b){
    console.log(a+b);
}
add(5,10,89,90,100) //extra arguments are ignored by the function, only the first two arguments are used.   ;

function add(...args){
    console.log(args);
}
add(5,10,89,90,100) //extra arguments are ignored by the function, only the first two arguments are used.   ;


function add(a,b){
    return a+b;
}
console.log(add(5,10));


var add=(a,b)=>a+b; //arrow function
console.log(add(5,10));

var add=(a,b)=>{
    console.log(a,b); //arrow function with block body
    return a+b;
}           
console.log(add(5,10));


///function wtre ananonymious function-assinment 


//set 
var s = new Set([1,2,3,3,4,4,4,4,5]);   //set is a collection of unique values
var s2 = new Set([4,5,6,7,8]); //empty set
console.log(s,s2); //set will remove duplicate values
//set operations
console.log(s.union(s2));