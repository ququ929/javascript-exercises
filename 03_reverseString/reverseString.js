const reverseString = function(word) {
    let char = "";
    let newWord = "";
    let wordLength = word.length;

    for (let i = wordLength; i >= 0; i--) {
        char = word.charAt(i);
        newWord += char;
    }

    return newWord;
}

// reverseString("test");

// Do not edit below this line
module.exports = reverseString;
