/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
import * as arrayUtils from "./arrayUtils.js";
import * as stringUtils from "./stringUtils.js";
import * as objUtils from "./objectUtils.js";

// sortAndFilter
let cars = [
    { model: "Reus", year: "2002", location: "Holland", class: "S" },
    { model: "McLaren", year: "2001", location: "Finland", class: "S" },
    { model: "McLaren", year: "2005", location: "England", class: "S" },
    { model: "Honda", year: "2002", location: "Finland", class: "S" },
    { model: "Mercelago", year: "2001", location: "Australia", class: "T" },
];

try {
    console.log(
        arrayUtils.sortAndFilter(
            cars,
            ["model", "asc"],
            ["location", "asc"],
            "class",
            "S"
        )
    );
} catch (e) {
    console.error(e);
}

try {
    console.log(
        arrayUtils.sortAndFilter(
            [
                {
                    model: "Reus",
                    year: "2002",
                    location: "Holland",
                    class: "S",
                },
                {
                    model: "Honda",
                    year: 2002,
                    location: "Finland",
                    class: "S",
                },
            ],
            "location",
            "year",
            "2002"
        )
    );
} catch (e) {
    console.error(e);
}

// merge

try {
    console.log(
        arrayUtils.merge(
            ["beer", 0, 1, [[[5, "geeee"]]]],
            [7, "bust", ["gaaaaaaaa", 8]]
        )
    );
} catch (e) {
    console.error(e);
}

try {
    console.log(arrayUtils.merge([3, 0], "8, 15", [6, 3, 29]));
} catch (e) {
    console.error(e);
}

// matrixMultiply

try {
    console.log(
        arrayUtils.matrixMultiply(
            [
                [1, 1],
                [1, 1],
                [1, 1],
            ],
            [
                [5, 5, 5],
                [7, 7, 7],
            ],
            [[1], [1], [1]]
        )
    );
} catch (e) {
    console.error(e);
}

try {
    console.log(
        arrayUtils.matrixMultiply([
            [9, 8],
            [7, 6],
        ])
    );
} catch (e) {
    console.error(e);
}

// palindromes

try {
    console.log(stringUtils.palindromes(["safgj", "saas?", "I"]));
} catch (e) {
    console.error(e);
}

try {
    console.log(stringUtils.palindromes("                          "));
} catch (e) {
    console.error(e);
}

// censorWords

let badWords = ["fruit", "syrup", "dam"];

try {
    console.log(
        stringUtils.censorWords("fruit syrup are like goddam", badWords)
    );
} catch (e) {
    console.error(e);
}

try {
    console.log(stringUtils.censorWords("As soon as wow possible", [2, "wow"]));
} catch (e) {
    console.error(e);
}

// distance
try {
    console.log(
        stringUtils.distance(
            "I was towing red buy sip reader yesterday",
            "towing red",
            "sip reader"
        )
    );
} catch (e) {
    console.error(e);
}

try {
    console.log(stringUtils.distance("Alaska Ram needs Sia", "Sia", "Ram"));
} catch (e) {
    console.error(e);
}

// areObjectsEqual

const one = { x: 2, y: 3 };
const two = { x: 2, y: 3 };
const three = { y: 3, x: 2 };

try {
    console.log(objUtils.areObjectsEqual(one, three, two));
} catch (e) {
    console.error(e);
}

try {
    console.log(objUtils.areObjectsEqual([1, 1, 1], [1, 1, 1]));
} catch (e) {
    console.error(e);
}

// calculateObject

try {
    console.log(
        objUtils.calculateObject({ x: 1, y: 2, z: 3 }, [
            (x) => x + 2,
            (x) => x * 2,
        ])
    );
} catch (e) {
    console.error(e);
}

try {
    console.log(
        objUtils.calculateObject({ x: "zero", y: 123124, z: true }, [
            (x) => x - x,
        ])
    );
} catch (e) {
    console.error(e);
}

// combineObjects

try {
    console.log(
        objUtils.combineObjects(
            { b: 7, c: 5 },
            { d: 4, e: 9, a: "ruffle" },
            { a: 8, d: 2 },
            { d: 3, e: "cello" }
        )
    );
} catch (e) {
    console.error(e);
}

try {
    console.log(objUtils.combineObjects({ need: "for", speed: "UG2" }, false));
} catch (e) {
    console.error(e);
}
