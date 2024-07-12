const removeFromArray = function(array, ...args) {
    let filteredArray = array.filter( (items) => !args.includes(items) )
    return filteredArray;
};
// FUCK THIS EXERCISE AND ITS TEST CASES and fuck problem solving if I don't even have the pre-requisites which the solution wants me to work with. "SeArCh fOr tHeM" my ass.
// learned about some array methods and did it again.

// Do not edit below this line
module.exports = removeFromArray;
