/*
14)	Write a function named countVowels that receives a String and returns the number of vowels (a, e, i, o, u) in the string.  i.e.  If it receives “Hello”, it will return 2 
*/

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU"; // Include both lowercase and uppercase vowels
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello"));
console.log(countVowels("Umbrella"));
