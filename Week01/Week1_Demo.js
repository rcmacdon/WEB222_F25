// -------------------------------------
// Title: Week 1 Demo
// Author: Clint MacDonald
// Date: Sept. 10, 2025
// Purpose: Demo for Week 1 - Intro to JavaScript
// -------------------------------------

// Output to console
console.log("Hello World!");
console.log               ("Hello World!");

// Variables and using them
// in C    int myAge = 25;
var myAge;
myAge = 25;
console.log("My age is: " + myAge);
console.log("I am %i years old.", myAge);

// JavaScript uses command blocks
if (myAge < 30) {
    console.log("You are young!");
} 
else if (myAge < 65) {
    console.log("You are middle-aged!");
}
else {
    console.log("You are old!");
}

// Data Types
/*
- String (is a character array)
- Number (integer, float, and decimal)
- Boolean
- Object
- Array
- Function
- Null
- Undefined
- Infinity
- NaN (not a number)
*/

// LOOSELY TYPED LANGUAGE (JavaScript, Python) vs. STRONGLY TYPED LANGUAGE (C, C++, Java, C#)

// Variants
var myString = "Hello";   // String
var myNum = 25;           // Number
console.log("%s - %i", myString, myNum);
console.log(myNum);
console.log(typeof myNum); // typeof operator
myNum = "Clint";        // Now a string
console.log(myNum);
console.log(typeof myNum); // typeof operator   

// wow
console.log(5/0); // Infinity
console.log(5/"Clint"); // NaN

// undefined
var x;
console.log(x); // undefined


// Expressions
   // Arithmetic: + - * / % ++ --
   // Relational: < > <= >= == !=
   // Logical: && || !
   // Assignment: = += -= *= /= %=

   // Conditional, Logical or Boolean

// Some Examples
var s1 = '172';
var s2 = '172' + 4;  // acts as string concatenation
var s3 = 4 + '172';  // acts as string concatenation
var s4 = 4 + +'172'; // the second + converts the string to a number
var n1 = 4 + 172;
var n2 = 172 + 4;
console.log("s1: %s\ns2: %s\ns3: %s\ns4: %s\nn1: %i\nn2: %i", s1, s2, s3, s4, n1, n2);

// Ternary Operator
var age = 19;
var canDrink = (age >= 21) ? "Yes" : "No";
console.log("Can you drink? %s", canDrink);

// Switch-Case 
var semester = 2;

switch (semester) {
    case 1:
        console.log("You are in the Fall semester.");
        break;
    case 2:
        console.log("You are in the Winter semester.");
        break;
    default:
        console.log("Summer semester.");
        break;
}

// Loops
for (var i = 0; i < 5; i++) {
    console.log("i: %i", i);
}

// i++ vs ++i
var a = 5;
console.log(a++);
console.log(a++);







