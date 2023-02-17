/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/
import * as helper from "./helpers.js";

let palindromes = (string) => {
    if (!helper.doesExists(string)) throw "the array does not exist";
    if (!helper.isArray(string)) throw "Input must be an array";
    if (helper.isEmpty(string)) throw "the input array is empty";
    if (!helper.arrayContainsAllNonEmptyString(string))
        throw "Each element of the array must be non-empty string";
    if (!helper.arrayContainSomeAlphanumeric(string))
        throw "Atleast one alphanumeric item must be present in each string";
    let result = {};
    // /g for global search, returning all matches
    let regexPattern = /[^A-Za-z0-9]/g;
    for (let i = 0; i < string.length; i++) {
        let word = string[i];
        word = word.replace(regexPattern, "");
        word = word.toLowerCase();
        result[word] = word === word.split("").reverse().join("");
    }
    return result;
};

let censorWords = (string, badWordsList) => {
    if (!helper.doesExists(string)) throw "the input string does not exist";
    if (!helper.isString(string)) throw "the input must be string";
    if (helper.isEmpty(string)) throw "the input string is empty";
    if (!helper.doesExists(badWordsList))
        throw "the input badWordsList does not exist";
    if (!helper.isArray(badWordsList)) throw "badWordsList must be an array";
    if (!helper.containsAtleastOne(badWordsList))
        throw "badWordsList must have atleast one bad word";
    if (!helper.arrayContainsAllString(badWordsList))
        throw "All bad words must be a string";
    if (!helper.allWordsInString(string, badWordsList))
        throw "All bad words must be present in the string";

    let badPresent = true;
    let counter = 0;
    while (badPresent) {
        let minIndex = string.length + 1;
        let minWord = "";
        for (let i = 0; i < badWordsList.length; i++) {
            let currIndex = string.indexOf(badWordsList[i]);
            if (currIndex === -1) continue;
            if (currIndex < minIndex) {
                minIndex = currIndex;
                minWord = badWordsList[i];
            }
        }
        if (minIndex < string.length + 1) {
            string = string.replace(
                minWord,
                helper.generateCensor(minWord.length, counter)
            );
            counter += minWord.length;
        } else badPresent = false;
    }
    return string;
};

// same word, throw error
let distance = (string, word1, word2) => {
    if (!helper.doesExists(string)) throw "the input string does not exist";
    if (!helper.doesExists(word1)) throw "the input word1 does not exist";
    if (!helper.doesExists(word2)) throw "the input word2 does not exist";
    if (!helper.isString(string)) throw "the input string must be string";
    if (!helper.isString(word1)) throw "the input word1 must be string";
    if (!helper.isString(word2)) throw "the input word2 must be string";
    if (helper.isEmpty(string)) throw "the input string is empty";
    if (helper.isEmpty(word1)) throw "the input word1 is empty";
    if (helper.isEmpty(word2)) throw "the input word2 is empty";

    string = string.toLowerCase();
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if (!helper.arrayContainSomeAlphanumeric([string, word1, word2]))
        throw "Atleast one alphanumeric item must be present in each of input string, word1 and word2";
    if (!helper.containsAtleastTwoWords(string))
        throw "the provided string doesn't have atleast two words";
    if (word1 === word2) throw "Both word1 and word2 can't be the same";
    if (!helper.allWordsInString(string, [word1, word2]))
        throw "Both word1 and word2 must be present in the string";

    // replace all word1 with weird_key1 and all word2 with weird_key2
    // now, no need to worry about multi word substring

    string = string.replace(/[^A-Za-z0-9 ]/g, " ");
    string = string.trim();

    // NEED TO FIX | replaceAll is replacing substring as well!!!!

    string = string.replaceAll(word1, "!");
    word1 = "!";

    string = string.replaceAll(word2, "$");
    word2 = "$";

    // Split by one or more spaces
    string = string.split(/\s+/);

    // console.log(string)
    let w1Indexes = helper.getAllIndices(string, word1);
    let w2Indexes = helper.getAllIndices(string, word2);

    if (Math.min(...w1Indexes) > Math.max(...w2Indexes))
        throw "atleast one word1 must appear before word2 in the string";

    let distance = helper.getMinIndex(w1Indexes, w2Indexes);
    // console.log(string)
    return distance[1] - distance[0];
};

export { palindromes, censorWords, distance };
