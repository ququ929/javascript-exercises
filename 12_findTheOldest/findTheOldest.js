const findTheOldest = function(array) {

    array.forEach(function(person) {
        if (person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear();
        }
     });

    const ageArray = array.sort(function (a, b) {
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;

        return bAge - aAge;
    });
    
    return ageArray[0];
};
// Do not edit below this line
module.exports = findTheOldest;
