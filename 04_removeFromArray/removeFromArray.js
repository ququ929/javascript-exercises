// ...removeItems, rest parameters, variadic function, accept indefinite argument.
const removeFromArray = function(aList, ...removeItems) {
    let itemIndex;
    
    // removeItems is an array from rest parameters, item is the element of array.
    // iterate from first element fo array to last.
    for (const item of removeItems) {
        itemIndex = aList.indexOf(item);

        // itemIndex() return -1 when no match element;
        if (itemIndex === -1) continue;

        else aList.splice(itemIndex, 1);
    }
    return aList;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
