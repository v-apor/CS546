/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/
import * as helper from "./helpers.js";

// Inspiration: https://dmitripavlutin.com
let areObjectsEqual = (...args) => {
    if (!helper.containsAllObjects(args))
        throw "all the items provided as input aren't objects";
    if (!helper.containsAtleastTwo(args))
        throw "the provided input doesn't have atleast two objects";
    let result = true;
    for (let i = 0; i < args.length - 1; i++) {
        result = result && helper.compareObject(args[i], args[i + 1]);
        // console.log(args[i], args[i + 1]);
        if (result === false) return false;
    }
    return true;
};

let calculateObject = (object, funcs) => {
    if (!helper.isObject(object)) throw "Provided input is not an object";
    if (!helper.isArray(funcs))
        throw "Provided list of functions is not an array";
    if (!helper.arrayContainsAllNumbers(Object.values(object)))
        throw "All the values of given object aren't numbers";
    if (!helper.containsAtleastOne(funcs))
        throw "Atleast one function must be provided";
    if (!helper.arrayHasAllFunctions(funcs))
        throw "All the elements in the array func aren't functions";
    let result = structuredClone(object);
    let value = 0;
    for (let key in object) {
        for (let i = 0; i < funcs.length; i++) {
            value = funcs[i](result[key]);
            result[key] = value;
        }
        result[key] = result[key].toFixed(2);
    }
    return result;
};

let combineObjects = (...args) => {
    if (!helper.containsAtleastTwo(args))
        throw "Atleast 2 object must be provided";
    if (!helper.containsAllObjects(args))
        throw "All the elements provided as input must be object";
    if (!helper.allObjContainsAtleastOneKey(args))
        throw "All objects must have atleast 1 key";
    let counter = {};
    for (let i = 0; i < args.length; i++) {
        for (let key in args[i])
            counter[key] = key in counter ? counter[key] + 1 : 1;
    }
    for (let key in counter) {
        if (counter[key] < 2) delete counter[key];
        else {
            for (let i = 0; i < args.length; i++) {
                if (key in args[i]) {
                    counter[key] = args[i][key];
                    break;
                }
            }
        }
    }
    return counter;
};

export { areObjectsEqual, calculateObject, combineObjects };
