const reverseString = function(string) {
    let arrayConversion = string.split("");
    let length = arrayConversion.length;
    let reversedString = ""
    for (let i = 1; i <= length; ++i) {
        reversedString += arrayConversion.pop();
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
