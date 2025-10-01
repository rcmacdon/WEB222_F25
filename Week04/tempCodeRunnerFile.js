function countValues(strings) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowCount = 0;
    strings.forEach(word => {word in vowels ? vowCount++ : null;});
    return vowCount;
}

console.log(countValues(['apClintple'])); 