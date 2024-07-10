const removeFromArray = function(array,...element) {
    let indexOfElement = -1;
    for(let i = 0; i<array.length; i++){
        if(array[i] == element){
            indexOfElement = i;
            break;
        }
    }
    if (indexOfElement !== -1){
        array.splice(indexOfElement,1);
    }
    return array;
};
// FUCK THIS EXERCISE AND ITS TEST CASES and fuck problem solving if I don't even have the pre-requisites which the solution wants me to work with. "SeArCh fOr tHeM" my ass.
// Do not edit below this line
module.exports = removeFromArray;
