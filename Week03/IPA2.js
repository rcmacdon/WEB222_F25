/* Objective: Practice working with variables, functions, and user input.
Task:
- Write a JavaScript program that asks the user to input two numbers and an operator (+, -, *, /).
- Use a function to perform the calculation based on the operator.
- Display the result using console.log() or by updating the HTML.
Bonus Challenge: Add basic error handling for invalid inputs or division by zero.
*/


// Function to perform calculation
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero is not allowed.";
            }
        default:
            return "Error: Invalid operator.";
    }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 0, "/")); // Error: Division by zero is not allowed.
console.log(calculate(10, 5, "%")); // Error: Invalid operator.
console.log(calculate(10, "a", "+")); // Error: Invalid input.


function validateCoord(lat, lng) {
  if (lat < -90 || lat > 90) {
    return false;
  }

  if (lng < -180 || lng > 180) {
    return false;
  }

  return true;
}