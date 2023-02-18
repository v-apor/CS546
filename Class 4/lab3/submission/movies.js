import * as helper from "./helpers.js";

const findMoviesByDirector = async (directorName) => {
    if (!helper.isValidString(directorName))
        throw "The directorName is not valid";
    directorName = directorName.trim();
    directorName = directorName.toLowerCase();
    let movies = await helper.getMovies();
    let movieList = [];

    for (let movie of movies) {
        if (movie["director"].trim().toLowerCase() === directorName)
            movieList.push(movie);
    }
    if (movieList.length === 0)
        throw "The director should have directed atleast one movie";
    return movieList;
};

const findMoviesByCastMember = async (castMemberName) => {
    if (!helper.isValidString(castMemberName))
        throw "The castMemberName is not valid";
    castMemberName = castMemberName.trim();
    castMemberName = castMemberName.toLowerCase();
    let movies = await helper.getMovies();
    let movieList = [];

    for (let movie of movies) {
        // Casting movies to lower case
        let lowerCast = [];
        for (let cast of movie["cast"])
            lowerCast.push(cast.trim().toLowerCase());
        if (lowerCast.includes(castMemberName)) movieList.push(movie);
    }
    if (movieList.length === 0)
        throw "The castmember should be in atleast one movie";
    return movieList;
};

const getOverallRating = async (title) => {
    if (!helper.isValidString(title)) throw "The title is not valid";
    title = title.trim();
    title = title.toLowerCase();
    let movies = await helper.getMovies();
    let ratings = 0;
    let ratingsCount = 0;
    let moviePresent = false;

    for (let movie of movies) {
        if (movie["title"].trim().toLowerCase() != title) continue;
        // console.log(movie["title"], movie["title"].trim().toLowerCase());
        moviePresent = true;
        for (let review of movie.reviews) {
            // console.log(ratingsCount, ratings, ratings / ratingsCount);
            ratingsCount += 1;
            ratings += review["rating"];
        }
    }
    if (!moviePresent) throw "No movie with the provided title exists";
    let overallRating = ratings / ratingsCount;
    overallRating = Math.floor(overallRating * 10) / 10;
    return overallRating;
};

const getMovieById = async (id) => {
    if (!helper.isValidString(id)) throw "The id is not valid";
    id = id.trim();
    let movies = await helper.getMovies();
    for (let movie of movies) if (movie.id.trim() == id) return movie;
    throw "Error: Movie not found";
};

export {
    findMoviesByDirector,
    findMoviesByCastMember,
    getOverallRating,
    getMovieById,
};
