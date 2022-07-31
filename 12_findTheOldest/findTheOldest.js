const findTheOldest = function(peopleArray) {
    const d = new Date();
    let year = d.getFullYear();
    let maxage = 0;
    let maxObject = {};
    for (let key of peopleArray) {
        let age;
        if (key.yearOfDeath == undefined){
            age = year - key.yearOfBirth;
        } else {
            age = key.yearOfDeath - key.yearOfBirth;
        }
        if (age > maxage ) {
            maxage = age;
            maxObject = key;
        }
    }
    return(maxObject);
};


// Do not edit below this line
module.exports = findTheOldest;
