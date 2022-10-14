const leapYears = function(year) {
    // year % 4 === 0, True, third
    // year % 100 === 0 False, second
    // year % 400 === 0 True, first condition to check

    if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else if (year % 4 === 0) return true;
    else return false;

};

// Do not edit below this line
module.exports = leapYears;
