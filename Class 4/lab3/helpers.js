import axios from "axios";

async function getMovies() {
    const response = await axios.get(
        "https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json"
    );
    return response.data;
}

async function getUsers() {
    const response = await axios.get(
        "https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json"
    );
    return response.data;
}

function isValidString(id) {
    if (typeof id != "string") return false;
    if (id.trim().length === 0) return false;
    return true;
}

export { getMovies, getUsers, isValidString };
