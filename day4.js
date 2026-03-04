//objects 
a=6;
b=9;
//uniary operator
console.log(a++); //postfix increment operator, returns the value before incrementing
console.log(++b); //prefix increment operator, returns the value after incrementing     
console.log(a--); //postfix decrement operator, returns the value before decrementing
console.log(--b); //prefix decrement operator, returns the value after decrementing 
console.log(a,b); //a is 7, b is 10

console.log(!b); //logical NOT operator, returns false if b is truthy, true if b is falsy
console.log(!!b); //double negation, returns true if b is truthy, false if b is falsy       

//binary operator
//arithmetic operators
console.log(a+b); //addition
console.log(a-b); //subtraction
console.log(a*b); //multiplication
console.log(a/b);   //division
console.log(a%b);   //modulus operator, returns the remainder of the division of a by b
console.log(a**b);  //exponentiation operator, returns a raised to the power of b       

//assignment operators
a=10;
a+=5; //a=a+5
console.log(a);

//comparison operators
console.log(a==15); //equality operator, returns true if a is equal to 15
console.log(a===15); //strict equality operator, returns true if a is equal to 15 and of the same type
console.log(a!=15); //inequality operator, returns true if a is not equal to 15
console.log(a!==15); //strict inequality operator, returns true if a is not equal to 15 or of a different type
console.log(a>15); //greater than operator, returns true if a is greater than 15
console.log(a<15); //less than operator, returns true if a is less than 15
console.log(a>=15); //greater than or equal to operator, returns true if a is greater than or equal to 15
console.log(a<=15); //less than or equal to operator, returns true if a is less than or equal to 15     
console.log(10 =='10'); //true, because == does type coercion
console.log(10 ==='10'); //false, because === does not do type coercion

//logical operators
console.log(a>5 && a<20); //logical AND operator, returns true if both conditions are true
console.log(a>5 || a<20); //logical OR operator, returns true if at least one condition is true
console.log(!(a>5)); //logical NOT operator, returns true if the condition is false, false if the condition is true     


//bitwise operators
console.log(a & b); //bitwise AND operator, returns a number whose bits are set to 1 only if the corresponding bits of both operands are 1
console.log(a | b); //bitwise OR operator, returns a number whose bits are set to 1 if the corresponding bits of either operand are 1
console.log(a ^ b); //bitwise XOR operator, returns a number whose bits are set to 1 only if the corresponding bits of the operands are different
console.log(~a); //bitwise NOT operator, returns a number whose bits are the complement of the bits of a
console.log(a << 2); //left shift operator, shifts the bits of a to the left by 2 positions, filling the rightmost bits with 0
console.log(a >> 2); //right shift operator, shifts the bits of a to the right by 2 positions, filling the leftmost bits with the sign bit (0 for positive numbers, 1 for negative numbers)
console.log(a >>> 2); //unsigned right shift operator, shifts the bits of a to the right by 2 positions, filling the leftmost bits with 0 regardless of the sign of a

//ternary operator
a=10;
console.log(a>15 ? 'a is greater than 15' : 'a is less than or equal to 15'); //ternary operator, returns the first expression if the condition is true, otherwise returns the second expression

var age=20;
if (age>=18){
    console.log('you are an adult');
}else{
    console.log('you are a minor');
}   

//string concatenation
s='hello';
s2='world';
console.log(s+s2);

//control flow statements
//if statement
var age=20;
if (age>=18){
    console.log('welcome to the adult world');
}   else{
    console.log('you are a minor');
}   

var age=20; 
if (age==18){
    console.log('you are 18 years old');
} else if (age>18){
    console.log('you are older than 18 years old');
}   else{
    console.log('you are younger than 18 years old');
}   


//switch case statement
var day="wednesday";
switch(day){
    case 'monday':
        console.log('today is monday'); 
        break;
    case 'tuesday':
        console.log('today is tuesday');    
        break;
    case 'wednesday':
        console.log('today is wednesday');    
        break;
    case 'thursday':
        console.log('today is thursday');    
        break;
    case 'friday':
        console.log('today is friday');    
        break;
    case 'saturday':
        console.log('today is saturday');    
        break;
    case 'sunday':
        console.log('today is sunday');    
        break;
    default:
        console.log('invalid day');    
}       


         