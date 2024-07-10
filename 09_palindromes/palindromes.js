const palindromes = function (something) {
    something = something.trim();
    let punctuation;
    let newArray = something.split('');
    if (newArray[newArray.length-1] == '!' || newArray[newArray.length-1] == '.'){
        punctuation = newArray.splice(newArray.length-1,1)
    }
    let reversedArray = newArray.reverse();
    let newSomething = reversedArray.join('');
    let originalWithoutPunctuation = newArray.join('');
    if (originalWithoutPunctuation.toLowerCase() === newSomething.toLowerCase()){
        return true;
    }else return false;
};

// Do not edit below this line
module.exports = palindromes;
