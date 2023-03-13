import * as bandFunctions from "./data/bands.js";

async function getRating(bandId) {
    const band = await bandFunctions.get(bandId);
    if (band.albums.length === 0) return 0;
    else {
        var overallRating = 0;
        for (let i = 0; i < band.albums.length; i++) {
            overallRating += band.albums[i].rating;
        }
        overallRating = overallRating / band.albums.length;
        return overallRating;
    }
}

export { getRating };
