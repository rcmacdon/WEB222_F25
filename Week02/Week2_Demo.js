// -------------------------------------
// Title: Week 2 Demo
// Author: Clint MacDonald
// Date: Sept. 10, 2025
// Purpose: Demo for Week 2 - Objects and Functions
// -------------------------------------

// JavaScript Objects
var student = {
    firstName: "Clint",
    lastName: "MacDonald",
    program: "CPA",
    studentId: 100111111
};

console.log(student);

// Accessing object properties
console.log("Student's first name is: " + student.firstName);
console.log("Student's last name is: " + student["lastName"]);

// JavaScript Functions
function displayStudentInfo(aStudent) {
    var returnString = "";
    //returnString = util.format("Student Name: %s %s\nProgram: %s\nStudent ID:%i", aStudent.firstName, aStudent.lastName, aStudent.program, aStudent.studentId);
    
    returnString = "Student Name: " + aStudent.firstName + " " + aStudent.lastName + "\nProgram: " + aStudent.program + "\nStudent ID: " + aStudent.studentId;

    return returnString;
}

console.log(displayStudentInfo(student));


// another example
function squaredNumber(inputNumber) {
    return inputNumber * inputNumber;
}

console.log("The square of 5 is: " + squaredNumber(5));
console.log("The square of 10 is: " + squaredNumber(10));
console.log("The square of 144 is: " + squaredNumber(144)); 


// Variant input parameters
function addNumbers() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log("The sum of 1,2,3 is: " + addNumbers(1,2,3));
console.log("The sum of 10,20,30,40,50 is: " + addNumbers(10,20,30,40,50));
console.log("The sum of 5,10 is: " + addNumbers(5,10)); 


// Converting data types
// parseInt
console.log("Convert 5.5 to an integer: " + parseInt(5.5));
console.log("Convert 5.5 to an integer: " + parseInt(5.6));
console.log("Convert 5.5 to an integer: " + parseInt("78"));

// parseFloat
console.log("Convert 5 to a float: " + parseFloat(5));
console.log("Convert '5.55' to a float: " + parseFloat("5.55"));
console.log("Convert '5.55abc' to a float: " + parseFloat("5.55abc"));
console.log("Convert 'abc5.55' to a float: " + parseFloat("abc5.55"));
console.log( parseFloat("1 2 3 4") );
// .toString
console.log( (5).toString() );
console.log( (5.55).toString() );

console.log( (5).toString() + "Clints age" );

// .toFixed
console.log( (5.55555).toFixed(2) );
console.log( (5.55555).toFixed(4) );
console.log( (5.5).toFixed(4) );

// typeof

// Conversion
var str1 = "1234";
var num1 = str1 * 2;
console.log(num1 + " --> " + typeof num1);

var str1 = "gfd1234";
var num1 = str1 * 2;
console.log(num1 + " --> " + typeof num1);

// eval()
// eval() function
var x = 2;
var y = 3;
console.log("x + y");       // x + y
console.log(eval("x + y")); // 5 


// summary of things with these special operations
// isNaN   (Not A Number)
console.log( isNaN("123") );        // false
console.log( isNaN(123) );          // false
console.log( isNaN("123 456 789") );// true
console.log( isNaN("+123") );       // false
console.log( isNaN("123+") );       // true
console.log( isNaN(" 123 ") );      // false

// isFinite
console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(0));         // true
console.log(isFinite(2e64));      // true