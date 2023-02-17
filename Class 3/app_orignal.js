/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
import * as arrayUtils from "./arrayUtils.js";
import * as stringUtils from "./stringUtils.js";
import * as objUtils from "./objectUtils.js";

// // Array
// let people = [
//     { name: "Ryan", age: "22", location: "Hoboken", role: "Student" },
//     { name: "Matt", age: "25", location: "New Jersey", role: "Student" },
//     { name: "Matt", age: "21", location: "New York", role: "Student" },
//     { name: "Greg", age: "22", location: "New York", role: "Student" },
//     { name: "Mike", age: "21", location: "Chicago", role: "Teacher" },
// ];

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "asc"],
//         ["location", "asc"],
//         "role",
//         "Student"
//     )
// );
// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "asc"],
//         ["location", "desc"],
//         "role",
//         "Student"
//     )
// );
// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         undefined,
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         {},
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [],
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [{}, []],
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [{}],
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [{ a: "test" }, { b: 24 }, {}],
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [
//             { a: "test", b: "rest" },
//             { b: 14, a: 61 },
//             { b: "x", c: "y" },
//         ],
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [
//             { a: "test", b: "rest" },
//             { b: 14, a: 61 },
//             { b: "x", a: "y" },
//         ],
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [
//             { a: "test", b: "rest" },
//             { b: "14", a: "61" },
//             { b: " ", a: "y" },
//         ],
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [
//             { a: "test", b: "rest" },
//             { b: "14", a: "61" },
//             { b: "a", a: "y" },
//         ],
//         undefined,
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [
//             { a: "test", b: "rest" },
//             { b: "14", a: "61" },
//             { b: "a", a: "y" },
//         ],
//         [],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [
//             { a: "test", b: "rest" },
//             { b: "14", a: "61" },
//             { b: "a", a: "y" },
//         ],
//         ["location", "desc", 61],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         [
//             { a: "test", b: "rest" },
//             { b: "14", a: "61" },
//             { b: "a", a: "y" },
//         ],
//         ["location", 14],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "asc"],
//         ["locationnnn", "asc"],
//         "role",
//         "Student"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "asc"],
//         "role",
//         "Student"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Dessc"],
//         ["location", "Asc"],
//         "role",
//         "Student"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "Assc"],
//         "role",
//         "Student"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "asc"],
//         undefined,
//         "Student"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "asc"],
//         "",
//         "Student"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "asc"],
//         "nmee",
//         "Student"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "asc"],
//         "name",
//         undefined
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "asc"],
//         "name",
//         ""
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "asc"],
//         "role",
//         "gamer"
//     )
// );

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "asc"],
//         ["location", "asc"],
//         "role",
//         "Student"
//     )
// );
/* output: 
    [{name: 'Greg', age: '22', location: 'New York', role: 'Student'},
    {name: 'Matt', age: '25', location: 'New Jersey', role: 'Student'},
    {name: 'Matt', age: '21', location: 'New York', role: 'Student'},
    {name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'}] 
     */

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "asc"],
//         ["location", "desc"],
//         "role",
//         "Student"
//     )
// );
// /* output:
//     [{name: 'Greg', age: '22', location: 'New York', role: 'Student'},
//     {name: 'Matt', age: '21', location: 'New York', role: 'Student'},
//     {name: 'Matt', age: '25', location: 'New Jersey', role: 'Student'},
//     {name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'}]
//     */

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );
// /* output:
//     [{name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'},
//     {name: 'Greg', age: '22', location: 'New York', role: 'Student'}]
//     */

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["ssn", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );
// /* output:
//     Error: the sortByField1 is not a key in each object of the array
//     */

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["location", "none"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );
// /* output:
//     Error: the order of sortByField1 must be either 'asc' or 'desc'
//     */

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["location", "asc"],
//         ["name", "asc"],
//         "phone",
//         "22"
//     )
// );
// /* output:
//     Error: the filterBy key is not a key in each object of the array
//     */

// console.log(
//     arrayUtils.sortAndFilter(["location", "asc"], ["name", "asc"], "age", "22")
// );
// /* output:
//     Error: the array does not exist
//     */

// console.log(
//     arrayUtils.sortAndFilter(
//         ["string", {}],
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         "22"
//     )
// );
// /* output:
//     Error: each element in the array must be an object
//     */

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["location", "asc"],
//         ["name", "asc"],
//         "age",
//         22
//     )
// );
// /* output:
//     Error: the filterByTerm must be a string
//     */

// console.log(
//     arrayUtils.sortAndFilter(
//         [
//             { name: "Ryan", age: "22", location: "Hoboken", role: "Student" },
//             { name: "Greg", age: 22, location: "New York", role: "Student" },
//         ],
//         "location",
//         "age",
//         "22"
//     )
// );
/* output:
    Error: each value for each key in each object in the array must be a string
    */

///////////

// console.log(
//     arrayUtils.sortAndFilter(
//         people,
//         ["name", "Desc"],
//         ["location", "asc"],
//         "name",
//         ""
//     )
// );

// console.log(
//     arrayUtils.merge([3, 0, 1, 2, 4], [1, 2, 8, 15], [6, 3, 10, 25, 29])
// );
// console.log(
//     arrayUtils.merge(
//         [3, 0, "Lab2", 2, "Aiden"],
//         ["CS-546", "Computer Science", 8, 15],
//         [6, 3, "Patrick", 25, 29]
//     )
// );
// console.log(
//     arrayUtils.merge(
//         [3, 0, "Lab2", 2, "Aiden"],
//         ["CS-546", "Computer Science", 8, 15],
//         [6, 3, "!Patrick", 25, 29]
//     )
// );
// console.log(
//     arrayUtils.merge(["bar", 0, 1, [[[5, "foo"]]]], [7, "buzz", ["fizz", 8]])
// );

// console.log(arrayUtils.merge([1, 2, 3], { a: "test" }, ["JavaScript"]));
// console.log(arrayUtils.merge([1, 2, 3], [5, "test"], [], ["JavaScript"]));
// console.log(
//     // arrayUtils.merge([1, 2, 3], [5, "test"], [{ a: 5 }], ["JavaScript"])
//     arrayUtils.merge([1, 2, 3], [5, "test"], ["   "], ["JavaScript"])
// );

// console.log(
//     arrayUtils.matrixMultiply(
//         [
//             [2, 3],
//             [3, 4],
//             [4, 5],
//         ],
//         [
//             [1, 1, 1],
//             [2, 2, 2],
//         ],
//         [[3], [2], [1]]
//     )
// );
// console.log(arrayUtils.matrixMultiply([[3, 5]], [[4], [4]]));
// console.log(arrayUtils.matrixMultiply([[1, 2]], [[2], [3]]));
// console.log(arrayUtils.matrixMultiply([[1, 2]], { a: "test" }));
// console.log(arrayUtils.matrixMultiply([[1, 2]], [[3], [4]]));
// console.log(arrayUtils.matrixMultiply([[1, 2]], [[3], ["4"]]));

// console.log(arrayUtils.matrixMultiply([[3, 5]], [[4], [4, 2]]));
// console.log(arrayUtils.matrixMultiply([[3, 5]], [[4], [4]], [[3], [3]]));
// console.log(arrayUtils.matrixMultiply([[1, 2]], [[3, 3]]));
// console.log(arrayUtils.matrixMultiply([[1, 2]], [["foobar"], [6]]));

// // String
// console.log(
//     stringUtils.palindromes([
//         "Madam",
//         "Loot",
//         "Was it? a cat I saw?",
//         "Poor Dan is in a droop",
//         "Anna",
//         "Nope",
//     ])
// );
// console.log(stringUtils.palindromes(undefined));
// console.log(stringUtils.palindromes());
// console.log(stringUtils.palindromes({ a: "test" }));
// console.log(stringUtils.palindromes([]));

// console.log(
//     stringUtils.palindromes([
//         "Madam",
//         "Loot",
//         "Was it? a cat I saw?",
//         "Poor Dan is in a droop",
//         "Anna",
//         "",
//     ])
// );

// console.log(
//     stringUtils.palindromes([
//         "Madam",
//         "Loot",
//         "Was it? a cat I saw?",
//         "Poor Dan is in a droop",
//         "@!$% !@$& @#$&",
//         "asf",
//     ])
// );

// console.log(stringUtils.palindromes([undefined, undefined]));

// console.log(
//     stringUtils.censorWords(
//         "I like bread that has chocolate chips in it but I do not like lollipops",
//         ["bread", "chocolate", "pop"]
//     )
// );
// console.log(
//     stringUtils.censorWords(
//         "The idea of complete freedom is totally fucked up concept",
//         ["freedom", "fucked up"]
//     )
// );

// console.log(stringUtils.censorWords(undefined, ["freedom", "fucked up"]));
// console.log(
//     stringUtils.censorWords(
//         "The idea of complete freedom is totally fucked up concept",
//         undefined
//     )
// );

// console.log(
//     stringUtils.censorWords(
//         "The idea of complete freedom is totally fucked up concept",
//         { 1: "freedom", 2: "fucked up" }
//     )
// );

// console.log(
//     stringUtils.censorWords(
//         "The idea of complete freedom is totally fucked up concept",
//         ["fucked up", 4]
//     )
// );

// console.log(
//     stringUtils.censorWords(
//         "The idea of complete freedom is totally fucked up concept",
//         ["fucked up", "woke"]
//     )
// );

// console.log(
//     stringUtils.distance("The brown fox jumped over the lazy dog", "fox", "dog")
// );
// console.log(
//     stringUtils.distance(
//         "I was going to buy workout powder yesterday",
//         "going to",
//         "workout powder"
//     )
// );
// console.log(
//     stringUtils.distance(
//         "sphinx of black quartz, judge my vow",
//         "QUARTZ",
//         "vOW"
//     )
// );
// console.log(
//     stringUtils.distance(
//         "I really hope it will snow soon because I like snow",
//         "I",
//         "snow"
//     )
// );
// console.log(
//     stringUtils.distance(
//         "I like sweet and salty but I like sweet more",
//         "salty",
//         "sweet"
//     )
// );

// console.log(stringUtils.distance(undefined, "salty", "sweet"));
// console.log(stringUtils.distance("salty", undefined, "sweet"));
// console.log(stringUtils.distance("salty", "sweet", undefined));

// console.log(stringUtils.distance([], "salty", "sweet"));

// console.log(
//     stringUtils.distance(
//         "I like sweet and salty but I like sweet more",
//         {},
//         "sweet"
//     )
// );

// console.log(stringUtils.distance("", "salty", "sweet"));

// console.log(
//     stringUtils.distance(
//         "I like sweet and salty but I like sweet more",
//         "",
//         "sweet"
//     )
// );

// console.log(
//     stringUtils.distance(
//         "I like sweet and salty but I like sweet more",
//         "salty",
//         ""
//     )
// );

// console.log(stringUtils.distance("salty", "salty", "sweet"));

// console.log(stringUtils.distance("salty sweet and sugary", "salty", "salty"));

// console.log(stringUtils.distance("salty sw33t and sugary", "salty", "sweet"));

// console.log(
//     stringUtils.distance(
//         "I like sweet and sour sweet and salty & salty and salty",
//         "salty",
//         "sweet"
//     )
// );

// // Object:
const first = { a: 2, b: 3 };
const second = { a: 2, b: 4 };
const third = { a: 2, b: 3 };
const forth = {
    a: { sA: "Hello", sB: "There", sC: "Class" },
    b: 7,
    c: true,
    d: "Test",
};
const fifth = {
    c: true,
    b: 7,
    d: "Test",
    a: { sB: "There", sC: "Class", sA: "Hello" },
};
const sixth = {
    name: { firstName: "Patrick", lastName: "Hill" },
    age: 47,
    dob: "9/25/1975",
    hobbies: ["Playing music", "Movies", "Spending time with family"],
};
const seventh = {
    age: 47,
    name: { firstName: "Patrick", lastName: "Hill" },
    hobbies: ["Playing music", "Movies", "Spending time with family"],
    dob: "9/25/1975",
};
const eighth = { b: 3, a: 2 };

// console.log(objUtils.areObjectsEqual(first, second, third)); // false
// console.log(objUtils.areObjectsEqual(forth, fifth)); // true
// console.log(objUtils.areObjectsEqual(forth, third, sixth)); // false
// console.log(objUtils.areObjectsEqual(sixth, seventh)); // true
// console.log(objUtils.areObjectsEqual(first, eighth, third)); // true
// console.log(objUtils.areObjectsEqual({}, {}, {}, {}, {})); // true

// console.log(objUtils.areObjectsEqual(forth, [14, 61]));
// console.log(objUtils.areObjectsEqual(forth));

// console.log(objUtils.areObjectsEqual([1, 2, 3], [1, 2, 3])); // throws error
// console.log(objUtils.areObjectsEqual("foo", "bar")); // throws error

// console.log(
//     objUtils.calculateObject({ a: 3, b: 7, c: 5 }, [
//         (n) => n * 2,
//         (n) => Math.sqrt(n),
//     ])
// );

// console.log(
//     objUtils.calculateObject("a: 3, b: 7, c: 5 ", [
//         (n) => n * 2,
//         (n) => Math.sqrt(n),
//     ])
// );

// console.log(
//     objUtils.calculateObject(
//         { a: 3, b: 7, c: 5 },
//         "(n) => n * 2, (n) => Math.sqrt(n)"
//     )
// );

// console.log(
//     objUtils.calculateObject(
//         { a: 3, b: 7, c: 5 },
//         "(n) => n * 2, (n) => Math.sqrt(n)"
//     )
// );

// console.log(
//     objUtils.calculateObject({ a: 3, b: "61", c: 5 }, [
//         (n) => n * 2,
//         (n) => Math.sqrt(n),
//     ])
// );

// console.log(objUtils.calculateObject({ a: 3, b: 61, c: 5 }, []));

// console.log(
//     objUtils.calculateObject({ a: 3, b: 61, c: 5 }, [
//         (n) => n * 2,
//         "(n) => Math.sqrt(n)",
//     ])
// );

// console.log(
//     objUtils.combineObjects(
// { a: 3, b: 7, c: 5 },
// { d: 4, e: 9 },
// { a: 8, d: 2 }
//     )
// );

// console.log(
//     objUtils.combineObjects({ a: 3, b: 7, c: 5 }, [{ d: 4, e: 9 }], {
//         a: 8,
//         d: 2,
//     })
// );

console.log(objUtils.combineObjects({ a: 3, b: 7, c: 5 }, { d: 4, e: 9 }, {}));

// console.log(
//     objUtils.combineObjects(
//         { b: 7, c: 5 },
//         { d: 4, e: 9, a: "waffle" },
//         { a: 8, d: 2 },
//         { d: 3, e: "hello" }
//     )
// );
// console.log(
//     objUtils.combineObjects(
//         { apple: "orange", orange: "pear" },
//         { pear: "blueberry", fruit: 4 },
//         { cool: false, intelligence: -2 }
//     )
// );
