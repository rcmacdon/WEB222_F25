// 11)	Write a function named reverseString that receives a String and returns the string in reverse order.  i.e.  If it receives “Hello”, it will return “olleH”

function reverseString(str) {
    let reversed = "";  
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Hello"));  // Output: "olleH"
