/*
Objective: Practice string manipulation and object usage.
Task:
- Prompt the user to enter a sentence.
- Split the sentence into words.
- Count how many times each word appears.
- Display the result as an object in the console.
Bonus Challenge: Ignore case and punctuation.
*/
function wordCount() {
    let sentence = prompt("Enter a sentence:");
    // Example input: "Hello world hello"
    sentence = sentence.toLowerCase(); // Ignore case
    sentence = sentence.replace(/[.,!?;:]/g, ''); // Remove punctuation
    let words = sentence.split(" ");
    let wordCount = {};

    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    // console.log(wordCount);

    // write the output to the paragraph with id="output"
    document.getElementById("output").innerText = JSON.stringify(wordCount, null, 2);
}