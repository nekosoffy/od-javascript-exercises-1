const removeFromArray = function(array, ...args) {
    for (let n = 0; n <= array.length - 1; ++n) {
        for (let i = 0; i <= args.length - 1; ++i) {
            if (array[n] === args[i]) {
                array.splice(n, 1);
                --n
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;