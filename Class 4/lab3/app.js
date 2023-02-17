import * as users from "./users.js";
import * as movies from "./movies.js";

async function main() {
    try {
        console.log(
            await users.getUserById("48fded55-37cd-4e6b-8f19-e78b481a14a4")
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await users.getUserById("  48fded55-37cd-4e6b-8f19-e78b481a14a4   ")
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.getUserById(146175));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.getUserById(""));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.getUserById("      "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await users.getUserById("11111111-37cd-4e6b-8f19-e78b481a14a4")
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.sameGenre("Action"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.sameGenre("Documentary"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.sameGenre(" actioN     "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.sameGenre("Payatic"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.sameGenre("  "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.sameGenre(75));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await users.moviesReviewed("64035fad-a5b7-48c9-9317-3e31e22fe26c")
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.moviesReviewed("   "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.moviesReviewed(-1));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await users.moviesReviewed("696969669-37cd-4e6b-8f19-e78b481a14a4")
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await users.referMovies("5060fc9e-10c7-4f38-9f3d-47b7f477568b")
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await users.referMovies("69696969-10c7-4f38-9f3d-47b7f477568b")
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.referMovies("   "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await users.referMovies());
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByDirector("Fernando Dollimore"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByDirector("  "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByDirector("Bhusdixx"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByDirector("Fernando DoLLimore"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByDirector("Fernando DoLLimore"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByDirector("Fernando DoLLimore   "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByCastMember("Huberto Snoddon"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByCastMember("HubErTO Snoddon"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByCastMember(""));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByCastMember("   "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByCastMember(5));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByCastMember("HubErTO Snoddon   "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.findMoviesByCastMember("Losdix"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await movies.getOverallRating(
                "Asterix and the Vikings (Astérix et les Vikings)"
            )
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await movies.getOverallRating(
                "Asterix and the Vikings (Astérix et les ViKINGS)      "
            )
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.getOverallRating("  "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.getOverallRating("Real Taxi"));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await movies.getMovieById("38fd6885-0271-4650-8afd-6d09f3a890a2")
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(await movies.getMovieById("  "));
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await movies.getMovieById(
                "38fd6885-0271-4650-8afd-6d09f3a890a2    "
            )
        );
    } catch (error) {
        console.error(error);
    }
    try {
        console.log(
            await movies.getMovieById("38fd6885-0271-4650-8afd-69696969669")
        );
    } catch (error) {
        console.error(error);
    }
}

main();
