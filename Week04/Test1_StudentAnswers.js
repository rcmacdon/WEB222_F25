function countValues(strings) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowCount = 0;
    strings.forEach(word => {word in vowels ? vowCount++ : null;});
    return vowCount;
}

console.log(countValues(['apClintple'])); 


function reverseString(str) {
    var reversed = str.reverse();
    return reversed;
}

console.log(reverseString("Hello"));
