const sumAll = function(num1, num2) {
    if (num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    } else if (num1 < 0 || num2 < 0){
        return "ERROR"
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "ERROR"
    }
    const arr = []
    for(num1; num1 <= num2; num1++){
        arr.push(num1)
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
