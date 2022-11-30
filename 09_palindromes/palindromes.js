const palindromes = function (string) {

    // remove punctuation 
    const newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                            .replace(/\s{2,}/g, " ")
                            .replaceAll(" ","")
                            .toLowerCase();

    // slice newString to an array, reverse the order, and then join back to string
    const reverseString = [...newString].reverse().join("");

    return newString === reverseString;

    
};

// Do not edit below this line
module.exports = palindromes;
