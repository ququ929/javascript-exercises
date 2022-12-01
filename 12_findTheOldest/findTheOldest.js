const findTheOldest = function(array) {

    array.forEach(function(person) {
        if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
        }
     });

    // this will modify existing array
    // if we don't want to do this, make sure to create a copy of the array with slice()
    const ageArray = array.sort(function (a, b) {
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;

        return bAge - aAge;
    });
    
    return ageArray[0];
};
// Do not edit below this line
module.exports = findTheOldest;
