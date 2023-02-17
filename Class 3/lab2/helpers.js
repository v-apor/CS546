/* Todo: Implment any helper functions below 
    and then export them for use in your other files.
*/

function multiply(mat1, mat2) {
    let r1 = mat1.length;
    let c1 = mat1[0].length;
    let r2 = mat2.length;
    let c2 = mat2[0].length;

    // Fix this
    if (c1 != r2) throw "Matrices cannot be multiplied";

    let result = new Array(r1);
    for (let i = 0; i < result.length; i++) result[i] = new Array(c2).fill(0);

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            for (let k = 0; k < c1; k++)
                result[i][j] = result[i][j] + mat1[i][k] * mat2[k][j];
        }
    }
    return result;
}

function generateCensor(length, counter) {
    let censor = ["!", "@", "$", "#"];
    let result = "";
    for (let i = 0; i < length; i++) {
        result += censor[counter % 4];
        counter += 1;
    }
    return result;
}

function getAllIndices(list, word) {
    let indices = [];
    let i = -1;
    while ((i = list.indexOf(word, i + 1)) != -1) {
        indices.push(i);
    }
    return indices;
}

function getMinIndex(indices1, indices2) {
    // console.log(indices1)
    // console.log(indices2)
    let startIndex = indices1[0];
    let minDist = indices2[indices2.length - 1];
    for (let i = 0; i < indices2.length; i++) {
        for (let j = 0; j < indices1.length; j++) {
            if (indices1[j] > indices2[i]) break;
            if (minDist > indices2[i] - indices1[j]) {
                minDist = indices2[i] - indices1[j];
                startIndex = indices1[j];
            }
        }
    }
    return [startIndex, startIndex + minDist];
}

function compareObject(o1, o2) {
    const k1 = Object.keys(o1);
    const k2 = Object.keys(o2);
    if (k1.length !== k2.length) {
        return false;
    }
    for (const k of k1) {
        const v1 = o1[k];
        const v2 = o2[k];
        const areObjects = isObject(v1) && isObject(v2);
        if (
            (areObjects && !compareObject(v1, v2)) ||
            (!areObjects && v1 !== v2)
        ) {
            return false;
        }
    }
    return true;
}

function doesExists(input) {
    return !(typeof input == "undefined");
}

function isEmpty(input) {
    // console.log(input.length === 0);
    return input.length === 0;
}

function isObject(input) {
    return typeof input === "object" && !Array.isArray(input);
}

function containsAllObjects(input) {
    let allObjects = true;
    for (let i = 0; i < input.length; i++)
        allObjects = allObjects && isObject(input[i]);
    return allObjects;
}

function containsAtleastTwo(input) {
    return input.length > 1;
}

function hasAnyEmpty(input) {
    let hasEmpty = false;
    for (let i = 0; i < input.length; i++)
        hasEmpty = hasEmpty || isEmpty(Object.keys(input[i]));
    return hasEmpty;
}

function isObjectEqual(obj1, obj2) {
    // console.log(JSON.stringify(Object.keys(obj1).sort()));
    // console.log(JSON.stringify(Object.keys(obj2).sort()));
    return (
        JSON.stringify(Object.keys(obj1).sort()) ===
        JSON.stringify(Object.keys(obj2).sort())
    );
}

function containsSameKeys(array) {
    let sameKeys = true;
    for (let i = 1; i < array.length; i++) {
        // console.log(i);
        sameKeys = sameKeys && isObjectEqual(array[i - 1], array[i]);
        if (!sameKeys) break;
    }
    // console.log(sameKeys);
    return sameKeys;
}

function objValIsString(obj) {
    let valueList = Object.values(obj);
    for (let i = 0; i < valueList.length; i++) {
        if (!(typeof valueList[i] === "string")) return false;
        if (valueList[i].trim().length === 0) return false;
    }
    return true;
}

function objContainsAllString(array) {
    let allStrings = true;
    for (let i = 0; i < array.length; i++) {
        allStrings = allStrings && objValIsString(array[i]);
    }
    return allStrings;
}

function hasOnlyTwo(array) {
    return array.length === 2;
}

function arrayContainsAllString(array) {
    let allStrings = true;
    for (let i = 0; i < array.length; i++) {
        allStrings = allStrings && typeof array[i] === "string";
    }
    return allStrings;
}

function isKeyPresent(key, array) {
    return key in array[0];
}

function isAscOrDesc(value) {
    // console.log(value, ["asc", "desc"].includes(value.toLowerCase()));
    return ["asc", "desc"].includes(value.toLowerCase());
}

function containsValue(array, filterBy, filterByTerm) {
    // console.log("!!!!!", array, filterBy, filterByTerm);
    let containsValue = false;
    for (let i = 0; i < array.length; i++) {
        containsValue = containsValue || array[i][filterBy] === filterByTerm;
        if (containsValue) break;
    }
    return containsValue;
}

function isString(str) {
    return typeof str === "string";
}

function hasAtleastOneArray(array) {
    if (array.length > 0 && typeof array[0] !== "undefined") return true;
    return false;
}

function containsAllArrays(array) {
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) return false;
    }
    return true;
}

function containsAllNonEmptyArrays(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < 1) return false;
    }
    return true;
}

function isStringOrNum(array) {
    for (let i = 0; i < array.length; i++) {
        if (!(typeof array[i] === "number" || typeof array[i] === "string"))
            return false;
    }
    return true;
}

function arrayContainsAllNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != "number") return false;
    }
    return true;
}

function subArrayOfSameLength(array) {
    for (let i = 0; i < array.length; i++) {
        let len = array[i][0].length;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j].length != len) return false;
        }
    }
    return true;
}

function matrixMultiplicationPossible(mat1, mat2) {
    return mat1[0].length === mat2.length;
}

function isArray(array) {
    return Array.isArray(array);
}

function arrayContainsAllNonEmptyString(array) {
    let allStrings = true;
    for (let i = 0; i < array.length; i++) {
        allStrings =
            allStrings && typeof array[i] === "string" && array[i].length > 0;
        if (!allStrings) break;
    }
    return allStrings;
}

function arrayContainSomeAlphanumeric(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(/[^A-Za-z0-9 ]/g, "");
        array[i] = array[i].trim();
        if (array[i].length === 0) return false;
    }
    return true;
}

function containsAtleastOne(array) {
    return array.length > 0;
}

function allWordsInString(string, badWordsList) {
    for (let i = 0; i < badWordsList.length; i++) {
        if (!string.includes(badWordsList[i])) return false;
    }
    return true;
}

function containsAtleastTwoWords(string) {
    return string.split(" ").length > 1;
}

function objectContainsAllNumbers(object) {
    return arrayContainsAllNumbers(Object.values(object));
}

function isFunction(fun) {
    return typeof fun === "function";
}

function arrayHasAllFunctions(array) {
    let allFunctions = true;
    for (let i = 0; i < array.length; i++) {
        allFunctions = allFunctions && isFunction(array[i]);
        if (!allFunctions) break;
    }
    return allFunctions;
}

function allObjContainsAtleastOneKey(array) {
    let atleastOneKey = true;
    for (let i = 0; i < array.length; i++) {
        atleastOneKey = atleastOneKey && Object.keys(array[i]).length > 0;
    }
    return atleastOneKey;
}

export {
    multiply,
    generateCensor,
    getAllIndices,
    getMinIndex,
    compareObject,
    doesExists,
    isEmpty,
    containsAllObjects,
    containsAtleastTwo,
    hasAnyEmpty,
    containsSameKeys,
    objContainsAllString,
    hasOnlyTwo,
    arrayContainsAllString,
    isKeyPresent,
    isAscOrDesc,
    containsValue,
    isString,
    hasAtleastOneArray,
    containsAllArrays,
    containsAllNonEmptyArrays,
    isStringOrNum,
    arrayContainsAllNumbers,
    subArrayOfSameLength,
    matrixMultiplicationPossible,
    isArray,
    arrayContainsAllNonEmptyString,
    arrayContainSomeAlphanumeric,
    containsAtleastOne,
    allWordsInString,
    containsAtleastTwoWords,
    isObject,
    objectContainsAllNumbers,
    arrayHasAllFunctions,
    allObjContainsAtleastOneKey,
};
