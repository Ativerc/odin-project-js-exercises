const sumAll = function(firstNumber, lastNumber) {
    let numberArray = [];
    if ((Math.sign(lastNumber) === -1) || (Math.sign(firstNumber) === -1)){
        return "ERROR";
    } else if ((typeof lastNumber !== 'number') || (typeof firstNumber !== 'number')) {
        return "ERROR";
    };
    if (lastNumber > firstNumber){
        arrayZeus(firstNumber, lastNumber, numberArray);
    } else {
        arrayZeus(lastNumber, firstNumber, numberArray);
    }
    let finalSum = numberArray.reduce((sum, x) => sum + x, 0);
    return finalSum;
};

function arrayZeus(smallNumber, bigNumber, numberArray) {
    for (let number = smallNumber; number <= bigNumber; number++) {
        numberArray.push(number);
    }
    return numberArray;
}

// Do not edit below this line
module.exports = sumAll;
