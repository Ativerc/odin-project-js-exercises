const palindromes = function (inputString) {
    filteredString = inputString.toLowerCase().replace(/[^a-z]/g, "");
    fStringArray = filteredString.split("");
    reversedString = fStringArray.reverse().join("");
    console.log(`reversedString: ${reversedString}`)
    return (reversedString == filteredString);
};

// Do not edit below this line
module.exports = palindromes;
