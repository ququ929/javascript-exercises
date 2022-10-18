// Math.round(n * 10)/10, round to first decimal place
// XF = (X - 32) * 5 / 9 C
const ftoc = function(fahrenheit) {
	fd = (fahrenheit - 32) * 5 / 9;
	return Math.round(fd * 10) / 10;
};

// XC = (X * 9 / 5 + 32) F
const ctof = function(celsius) {
	cd = celsius * 9 / 5 + 32;
	return Math.round(cd * 10) / 10;
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof
};
