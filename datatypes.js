"use strict";
exports.__esModule = true;
//if u use 'let' u need to use above line as File has been declared as a script that shares global scope but let does not allow redeclaration. Both these combined, threw the error.
// let pending: boolean;
// The Type or the Data Type is an attribute of data which tells us what kind of value the 
//data has. Whether it is a number, string, boolean, etc. The type of data defines the 
//operations that we can do on that data.
// Typescript Data types
//***************************
//1. Boolean
var pending;
pending = false;
//2. Number
var price = 9.95;
// remove below comment to see string is not assignable to number error
//price="kk";
//3. String
var firstName = 'John';
var description = "This TypeScript string can \nspan multiple \nlines\n";
console.log(description);
//4. Array
//array or tuple can hold different data types like javascript array
//using union data type this can be achieved
var skills1 = ['Problem Sovling', 'Software Design', 'Programming'];
//can change order
skills1 = ['Software Design', 'Problem Sovling', 'Programming'];
console.log(skills1[0]);
//number of elements are not fixed,can add or remove
//add by push, pop for removing
skills1.push('Design Analysis');
console.log(skills1[3]);
//5.Tuple
//A tuple works like an array but unlike array, number and order of elements in the tuple is fixed.
//so can not push elements in tuple
var tuple1;
tuple1 = ['Programming', 5];
console.log(tuple1[1]);
//below line will give error
//tuple1 = [5,'Programming'];
//6. any data type
//*****************
//used when you don’t know its type at the time of writing the program.Example-> unknown value from a third party API or user input.
//In this case, you want to opt-out of the type checking and allow the value to pass through the compile-time check.
//To do so, you use the any type. The any type allows you to assign a value of any type to a variable
// ways to declare it
//1.If you declare a variable without specifying a type, TypeScript assumes that you use the any type.
//2.using 'any' keyword
var result;
var result1;
result1 = 99;
result = 10.123;
//when u change data type as in below line it will not raise error due to datatype 'any'
result = "kk";
console.log(result);
//7. Void data type
//******************
//The void type denotes the absence of having any type at all. It is like the opposite of the any type.
//Usually we use the void type as the return type of functions that do not return a value.
function log(message) {
    console.log(message);
}
log("hello kelvin");
//8. Never data type
//***********************
// The never type is a type that contains no values. 
// Because of this, you cannot assign any value to a variable with a never type.
// Typically, you use the never type to represent the return type of a function that always throws an error. 
// function raiseError(message: string): never {
//     throw new Error(message);
// }
// function reject() { 
//     return raiseError('Rejected');
//  }
//  reject();
var loop = function forever() {
    while (true) {
        console.log('Hello');
    }
};
//Advanced data types
//**********************
//1. Union types
//A union type describes a value that can be one of several types. We use the 
//vertical bar (|) to separate each type, so number | string | boolean is the type of a value
//that can be a number, a string, or a boolean.
var uresult;
uresult = 10; // OK
uresult = 'Hi'; // also OK
//uncomment below line to see error
//uresult = false; // a boolean value, not OK
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}
console.log(add(6, 7));
console.log(add("jaya", "madan"));
//uncomment below line to see error
//console.log(add(true,88));
//2. String Literal
//string literal allows user to specify a precise value a string should have.
//example->The following defines a string literal type that accepts a literal string 'click':
var click;
click = 'click'; // valid
//uncomment below line to see error
//click = 'dblclick'; // compiler error
// use union to define a finite set of string literal values for a variable
var mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
var firstEvent;
firstEvent = 'click2'; // valid
firstEvent = 'dblclick2'; // valid
firstEvent = 'mousedown2'; // valid
//mouseEvent = 'mouseover'; // compiler error
var anotherEvent;
anotherEvent = "click2";
//all fields of BusinessPartner and Contact should be present in variable declared with type Customer else error will come
var c = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
console.log(c);
console.log(typeof c);
//if in union type u have any of these=> null,never,undefined and a data type like number then it will assign only number
// let xy1: number | never;//number
// let xy2: number | null;//number
// let xy3: number | undefined;//number
// let xy4: number | string;//string |number
