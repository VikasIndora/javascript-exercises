const fibonacci = function(index) {
    +index;
    if (index < 0) return 'OOPS'
    let fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;
    for(let i=2; i<=index; i++){
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray[index];
};

// Do not edit below this line
module.exports = fibonacci;
