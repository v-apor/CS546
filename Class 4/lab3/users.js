//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//User data link: https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json
import * as helper from "./helpers.js";

const getUserById = async (id) => {
    if (!helper.isValidString(id)) throw "The id is not valid";
    id = id.trim();
    let users = await helper.getUsers();
    // let user = users.find((ele) => ele.id === id);
    // if (user) return user;
    for (let user of users) if (user.id == id) return user;
    throw "User not found";
};

const sameGenre = async (genre) => {
    if (!helper.isValidString(genre)) throw "The provided genre is not valid";
    genre = genre.trim();
    genre = genre.toLowerCase();
    let users = await helper.getUsers();
    let resArray = [];
    let userCount = 0;
    for (let user of users) {
        if (userCount > 50) break;
        if (user["favorite_genre"].toLowerCase() === genre) {
            resArray.push(user.first_name + " " + user.last_name);
            userCount += 1;
        }
    }
    if (resArray.length < 2)
        throw "There must be atleast two users having the provided favorite genre.";
    resArray = resArray.sort((a, b) => {
        if (a.split(" ")[1] > b.split(" ")[1]) return 1;
        if (a.split(" ")[1] < b.split(" ")[1]) return -1;
        else return 0;
    });
    return resArray;
};

const moviesReviewed = async (id) => {
    if (!helper.isValidString(id)) throw "The id is not valid";
    id = id.trim();
    let allReviews = [];

    let users = await helper.getUsers();
    let userName = "";
    for (let user of users) {
        if (user.id === id) {
            userName = user.username;
            break;
        }
    }
    if (userName === "") throw "User not found";

    let movies = await helper.getMovies();
    for (let movie of movies) {
        for (let review of movie["reviews"]) {
            if (review["username"] === userName) {
                let movieObj = {};
                movieObj[movie["title"]] = review;
                allReviews.push(movieObj);
            }
        }
    }
    return allReviews;
};

const referMovies = async (id) => {
    if (!helper.isValidString(id)) throw "The id is not valid";
    id = id.trim();
    let users = await helper.getUsers();
    let userName = "";
    let favGenre = "";
    for (let user of users) {
        if (user.id === id) {
            userName = user.username;
            favGenre = user.favorite_genre;
            break;
        }
    }
    if (userName === "") throw "User not found";

    let recommendations = [];

    let movies = await helper.getMovies();
    for (let movie of movies) {
        if (!movie.genre.split("|").includes(favGenre)) continue;
        let hasReviewed = false;
        for (let review of movie["reviews"]) {
            if (review["username"] === userName) {
                // console.log(userName, "Movie", movie["title"]);
                hasReviewed = true;
                break;
            }
        }
        if (!hasReviewed) recommendations.push(movie["title"]);
    }
    return recommendations;
};

export { getUserById, sameGenre, moviesReviewed, referMovies };
