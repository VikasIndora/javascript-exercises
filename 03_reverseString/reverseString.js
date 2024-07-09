const reverseString = function(word) {
    let wordIntoArray = word.split('');
    let reversedArray = wordIntoArray.reverse();
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
