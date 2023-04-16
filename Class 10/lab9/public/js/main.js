function getTextAnalysis(input) {
    const result = {};

    result.originalInput = input;

    // removing trim() as we also need to count blank space
    // input = input.trim().toLowerCase();
    input = input.toLowerCase();

    result.totalLetters = input.replace(/[^a-z]/g, "").length;

    result.totalNonLetters = input.replace(/[a-z]/g, "").length;

    result.totalVowels = input.match(/[aeiou]/g)?.length || 0;

    result.totalConsonants =
        input.match(/[bcdfghjklmnpqrstvwxyz]/g)?.length || 0;

    const words = input.split(/[^a-z]+/).filter(Boolean);
    result.totalWords = words.length;

    const uniqueWords = new Set(words);
    result.uniqueWords = uniqueWords.size;

    result.longWords = words.filter((word) => word.length >= 6).length;

    result.shortWords = words.filter((word) => word.length <= 3).length;

    return result;
}

function displayAnalysis(result) {
    console.log("displayAnalysis: ", resultsDiv.innerHTML);
    let html = "<dl>";
    html += `<dt>Original Input:</dt><dd>${result.originalInput}</dd>`;
    html += `<dt>Total Letters:</dt><dd>${result.totalLetters}</dd>`;
    html += `<dt>Total Non-Letters:</dt><dd>${result.totalNonLetters}</dd>`;
    html += `<dt>Total Vowels:</dt><dd>${result.totalVowels}</dd>`;
    html += `<dt>Total Consonants:</dt><dd>${result.totalConsonants}</dd>`;
    html += `<dt>Total Words:</dt><dd>${result.totalWords}</dd>`;
    html += `<dt>Unique Words:</dt><dd>${result.uniqueWords}</dd>`;
    html += `<dt>Long Words:</dt><dd>${result.longWords}</dd>`;
    html += `<dt>Short Words:</dt><dd>${result.shortWords}</dd>`;
    html += "</dl>";
    resultsDiv.innerHTML += html;
}

const form = document.getElementById("myForm");
const resultsDiv = document.getElementById("results");
const errorDiv = document.getElementById("error");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorDiv.innerHTML = "";
    const input = document.getElementById("text_input").value;

    // Adding this because there can't be all empty spaces
    if (input.trim() === "") errorDiv.innerHTML = "Please enter a valid input";
    else {
        const analysis = getTextAnalysis(input);
        displayAnalysis(analysis);
    }
    form.reset();
});
