// let str = "Hello world fuck off, fuck onn!!";
// let reg = /fuck/g;
// str = str.replace(reg, "duck");

// console.log(str.indexOf("duck"));

// /////////////

// function getAllIndices(string, word) {
//     let length = word.length;
//     let startIndex = 0;
//     let index = 0;
//     let indices = [];
//     while ((index = string.indexOf(word, startIndex)) > -1) {
//         indices.push(index);
//         startIndex = index + length;
//     }
//     return indices;
// }

// function getMinIndex(indices1, indices2) {
//     console.log(indices1);
//     console.log(indices2);
//     let startIndex = indices1[0];
//     let minDist = indices2[indices2.length - 1];
//     for (let i = 0; i < indices2.length; i++) {
//         for (let j = 0; j < indices1.length; j++) {
//             if (indices1[j] > indices2[i]) break;
//             if (minDist > indices2[i] - indices1[j]) {
//                 minDist = indices2[i] - indices1[j];
//                 startIndex = indices1[j];
//             }
//         }
//     }
//     return [startIndex, startIndex + minDist];
// }

// let distance = (string, word1, word2) => {
//     // replace all word1 with weird_key1 and all word2 with weird_key2
//     // now, no need to worry about multi word substring
//     //      string = string.replaceAll(word1, "!~!~!")
//     //      string = string.replaceAll(word2, "$~$~$")

//     string = string.toLowerCase();
//     string = string.replace(/[^A-Za-z0-9 ]/g, "");
//     word1 = word1.toLowerCase();
//     word2 = word2.toLowerCase();

//     let w1indices = helper.getAllIndices(string, word1);
//     let w2indices = helper.getAllIndices(string, word2);

//     let range = helper.getMinIndex(w1indices, w2indices);
//     console.log(
//         string
//             .slice(range[0] + word1.length, range[1])
//             .trim()
//             .split(" ")
//     );

//     //      return string;
// };

// console.log("testing the test code".includes("test"));
// console.log("testing the test code".indexOf("~"));

function test(array) {
    console.log(typeof arr);
}

test();
console.log(Array.isArray([1, 2]));
console.log(typeof { a: "test" });
console.log(Object.keys({ a: "test", b: "rest" }));
console.log(Object.values({ a: "test", b: "rest", c: "" }));
console.log("    ".trim().length);
console.log("helloWorld".trim().length);
console.log("".length);

console.log(typeof test);
