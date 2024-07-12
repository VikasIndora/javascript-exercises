const palindromes = function (input) {
    let alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanedInput = input
    .trim()
    .toLowerCase()
    .split('')
    .filter( (i) => alphanumerical.includes(i) )
    .join('');

    let reversedInput = cleanedInput
    .split('')
    .reverse()
    .join('');

    return cleanedInput === reversedInput;
};

// Do not edit below this line
module.exports = palindromes;
