const fibonacci = function(position) {
    let intPosition = parseInt(position);
    
    if (intPosition < 0) return "OOPS";
    if (intPosition === 0) return 0;
    if (intPosition < 3) return 1; 
    
    let sequence = [1, 1];
    for (let i = 2; i < intPosition; i++) {
        let sum = sequence.at(-1) + sequence.at(-2);
        sequence.push(sum);
    }
    return sequence.at(intPosition - 1);
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
