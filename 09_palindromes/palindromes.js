const palindromes = function (string) {
    let cleanedArray = [];
    let punctuation = '!?,.;´`~ '
    let array = string.toLowerCase().split("");
    array.forEach(item => {
        if (!(punctuation.includes(item))) {
            cleanedArray.push(item);
        }
    });
    let cleanedString = cleanedArray.join("")
    let reversedCleanedString = cleanedArray.reverse().join("");
    return (cleanedString === reversedCleanedString);
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
