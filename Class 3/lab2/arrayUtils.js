/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

// NOTE: Check for typeof NaN while checking if it's an object or not

import * as helper from "./helpers.js";

// Check again, objContainsAllString changed
let sortAndFilter = (array, sortBy1, sortBy2, filterBy, filterByTerm) => {
    if (!helper.doesExists(array)) throw "the array does not exist";
    if (!helper.isArray(array)) throw "Input must be an array";
    if (helper.isEmpty(array)) throw "the input array is empty";
    if (!helper.containsAllObjects(array))
        throw "all the items in the provided array aren't objects";
    if (!helper.containsAtleastTwo(array))
        throw "the provided array doesn't have atleast two objects";
    if (helper.hasAnyEmpty(array))
        throw "the provided array contains atleast one empty object";
    if (!helper.containsSameKeys(array))
        throw "the keys of all the objects provided in the array aren't the same";
    if (!helper.objContainsAllString(array))
        throw "each value for each key in each object in the array must be a string";
    if (!helper.doesExists(sortBy1)) throw "the sortBy1 array does not exist";
    if (helper.isEmpty(sortBy1)) throw "the input array sortBy1 is empty";
    if (!helper.hasOnlyTwo(sortBy1))
        throw "the input array sortBy1 doesn't contain exactly 2 elements";
    if (!helper.arrayContainsAllString(sortBy1))
        throw "Atleast one of the element of the provided array sortBy1 isn't a string";
    if (!helper.isKeyPresent(sortBy1[0], array))
        throw "the sortByField1 is not a key in each object of the array";
    if (!helper.isAscOrDesc(sortBy1[1]))
        throw "sortBy1's specified order isn't either asc or desc";
    if (!helper.doesExists(sortBy2)) throw "the sortBy2 array does not exist";
    if (helper.isEmpty(sortBy2)) throw "the input array sortBy2 is empty";
    if (!helper.hasOnlyTwo(sortBy2))
        throw "the input array sortBy2 doesn't contain exactly 2 elements";
    if (!helper.arrayContainsAllString(sortBy2))
        throw "Atleast one of the element of the provided array sortBy2 isn't a string";
    if (!helper.isKeyPresent(sortBy2[0], array))
        throw "sortBy2's key isn't present in input array";
    if (!helper.isAscOrDesc(sortBy2[1]))
        throw "sortBy2's specified order isn't either asc or desc";
    if (!helper.doesExists(filterBy)) throw "the filterBy key does not exist";
    if (helper.isEmpty(filterBy)) throw "the filterBy key is an empty string";
    if (!helper.isKeyPresent(filterBy, array))
        throw "the filterBy key ins't present in the provided array";
    if (!helper.doesExists(filterByTerm))
        throw "the filterByTerm value does not exist";
    if (!helper.isString(filterByTerm))
        throw "the filterByTerm must be a string";
    if (helper.isEmpty(filterByTerm))
        throw "the filterByTerm value is an empty string";
    if (!helper.containsValue(array, filterBy, filterByTerm))
        throw "the filter value isn't present in any of the object on the provided array";

    let result = [];

    // This sorts based on sortBy1[0]
    array.sort((a, b) => (a[sortBy1[0]] > b[sortBy1[0]] ? 1 : -1));
    if (sortBy1[1] == "desc") array.reverse();
    // console.log(array)

    let keySet = new Set();
    for (let i = 0; i < array.length; i++) {
        if (!keySet.has(array[i][sortBy1[0]])) {
            keySet.add(array[i][sortBy1[0]]);
            let tempArr = array.filter(
                (dict) => dict[sortBy1[0]] == array[i][sortBy1[0]]
            );
            tempArr.sort((a, b) => (a[sortBy2[0]] > b[sortBy2[0]] ? 1 : -1));
            if (sortBy2[1].toLowerCase() == "desc") tempArr.reverse();
            result = result.concat(tempArr);
        }
    }
    // Now sort with sortBy2[0]
    return result.filter((dict) => dict[filterBy] === filterByTerm);
};

let merge = (...args) => {
    if (!helper.isArray(args)) throw "Input must be an array";
    if (!helper.hasAtleastOneArray(args))
        throw "there should be atleast one array provided";
    if (!helper.containsAllArrays(args)) throw "all the inputs must be array";
    if (!helper.containsAllNonEmptyArrays(args))
        throw "each input array must have atlease one element";
    if (!helper.isStringOrNum(args.flat(Infinity)))
        throw "each element should be either string or number";
    let numArr = [];
    let strArr = [];
    let unpacked = [];
    for (let i = 0; i < args.length; i++)
        unpacked = unpacked.concat(args[i].flat(Infinity));
    for (let i = 0; i < unpacked.length; i++) {
        if (typeof unpacked[i] === "number") numArr.push(unpacked[i]);
        else if (typeof unpacked[i] === "string") strArr.push(unpacked[i]);
    }
    numArr.sort((a, b) => a - b);
    strArr.sort();
    return numArr.concat(strArr);
};

let matrixMultiply = (...args) => {
    // Validations Here
    if (!helper.isArray(args)) throw "Input must be an array";
    if (!helper.containsAtleastTwo(args))
        throw "the provided input doesn't have atleast two arrays";
    if (!helper.containsAllArrays(args)) throw "all the inputs must be array";
    if (!helper.containsAllNonEmptyArrays(args))
        throw "each input array must be non-empty";
    if (!helper.arrayContainsAllNumbers(args.flat(Infinity)))
        throw "The inner arrays must only have numbers as elements";
    if (!helper.subArrayOfSameLength(args))
        throw "Each inner array is not of the same length";

    let result = args[0];
    for (let i = 1; i < args.length; i++) {
        if (!helper.matrixMultiplicationPossible(result, args[i]))
            throw "Matrix multiplication not possible";
        result = helper.multiply(result, args[i]);
    }
    return result;
};

export { sortAndFilter, merge, matrixMultiply };
