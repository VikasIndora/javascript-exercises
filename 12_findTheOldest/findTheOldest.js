const findTheOldest = function(array) {
    let ages = [];
    for(let i=0; i<array.length; i++){
    if (typeof array[i].yearOfDeath === 'undefined'){
        ages[i] = 2024 - array[i].yearOfBirth ;
    } else {
    ages[i] = array[i].yearOfDeath - array[i].yearOfBirth;
    }
    }
    if (ages[0] > ages[1] && ages[2]){
        return array[0];
    } else if (ages[1] > ages[0] && ages[2]){
        return array[1];
    } else if (ages[2] > ages[0] && ages[1]){
        return array[2];
    }
};

// Do not edit below this line
module.exports = findTheOldest;
