import * as bandFunctions from "./data/bands.js";
import { ObjectId } from "mongodb";
import { bands } from "./config/mongoCollections.js";

async function updateRating(bandId) {
    const bandCollection = await bands();
    const band = await bandFunctions.get(bandId);
    if (band.albums.length === 0) return 0;
    else {
        var overallRating = 0;
        for (let i = 0; i < band.albums.length; i++) {
            overallRating += band.albums[i].rating;
        }
        overallRating = overallRating / band.albums.length;
        const filter = { _id: new ObjectId(bandId) };
        const updateDoc = {
            $set: { overallRating: overallRating },
        };
        const updateInfo = await bandCollection.updateOne(filter, updateDoc);
        return overallRating;
    }
}

export { updateRating };
