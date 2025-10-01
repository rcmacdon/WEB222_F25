/* 12)	Write a function that returns the sum of all the numbers in the input parameters.  You do not know how many there are but you get the sum anyways:  (5 marks)
example:  
addNumbers(1,2,3) will return 6
addNumbers(10,20,30,40,50) will return 150
*/

function addNumbers(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(addNumbers(1, 2, 3)); // Output: 6
console.log(addNumbers(10, 20, 30, 40, 50)); // Output: 150

