const repeatString = function(string, num) {
    let result = "";

    if (num < 0) return "ERROR";

    while (num) {
        result += string;
        num--;
    }

    return result;    
};

// Do not edit below this line
module.exports = repeatString;
