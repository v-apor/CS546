import axios from "axios";
async function getMovies() {
    const { data } = axios.get(
        "https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json"
    );
    return data; // this will be the array of user objects
}

let x = getMovies();
console.log(x);

console.log("Apoorv" < "Bpoorv");
