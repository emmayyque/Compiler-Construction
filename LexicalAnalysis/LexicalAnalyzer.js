// Regular expressions for each component

// <id>
const idRegex = new RegExp(`^[_a-zA-Z][_a-zA-Z0-9]*`);

// <digit>
const digit = '[0-9]';

// <int>
const intRegex = new RegExp(`^${digit}+`);

// <float>
const floatRegex = new RegExp(`^${digit}*\.${digit}+`);

// <Num>
const numRegex = new RegExp(`^[+-]?(${intRegex.source}|${floatRegex.source})`);

// <Lex>
const lexRegex = new RegExp(`(${idRegex.source}|${numRegex.source})`);

// Function to classify tokens
function classifyToken(word) {
    if (idRegex.test(word)) {
        return `Identifier: ${word}`;
    } else if (numRegex.test(word)) {
        return `Number: ${word}`;
    } else {
        return `Invalid Word: ${word}`;
    }
}

// User Input Setup
const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Get Input from user
rl.question('Enter the word seperated by spacs: ', (input) => {
    const words = input.split(" ")
    words.forEach(word => {
        console.log(`${word} is of Type => ${classifyToken(word)}`)
    })
    rl.close();
})