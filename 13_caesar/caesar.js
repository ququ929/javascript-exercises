// a-z: 97-122
// A-Z: 65-90


const caesar = function(string, number) {
    let stringUnicode = [];

    // create the array of the unicode
    for (let i = 0; i < string.length; i++) {
        stringUnicode.push(string.charCodeAt(i));
    }

    // every number in array shift with number
    stringUnicode.forEach((code, index) => {
        if (inRange(code)) {
            stringUnicode[index] = code + number % 26;

            // 4 situation of out of range after shift.
            if (number > 0 && isLower(code) && stringUnicode[index] > 122) {
                stringUnicode[index] -= 26;
            }

            else if (number > 0 && isUpper(code) && stringUnicode[index] > 90) {
                stringUnicode[index] -= 26;
            }

            else if (number < 0 && isLower(code) && stringUnicode[index] < 97) {
                stringUnicode[index] += 26;
            }

            else if (number < 0 && isUpper(code) && stringUnicode[index] < 65) {
                stringUnicode[index] += 26;
            }

        }
    });

    // recreate the string from the array of the unicode
    return String.fromCharCode(...stringUnicode);
}

// checker for alphabets
function inRange(number) {
    return ((number >= 65 && number <= 90) || (number >= 97 && number <= 122));
} 

// checker for lowercase
function isLower(number) {
    return (number >= 97 && number <= 122);
}

// checker for uppercase
function isUpper(number) {
    return (number >= 65 && number <= 90);
}

// Do not edit below this line
module.exports = caesar;
