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




