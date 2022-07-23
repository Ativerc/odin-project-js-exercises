const repeatString = function(inputString, repeatNumber) {
    if (repeatNumber < 0) {
        return "ERROR";
    }
    return ( inputString.repeat(repeatNumber) );
};

// Do not edit below this line
module.exports = repeatString;
