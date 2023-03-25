// import express from "express";
// const app = express();
// import configRoutes from "./routes/index.js";

// app.use(express.json());

// configRoutes(app);

// app.listen(3000, () => {
//     console.log("Live on http://localhost:3000");
// });

import { dbConnection, closeConnection } from "./config/mongoConnection.js";
import * as bandFunctions from "./data/bands.js";
import * as albumFunctions from "./data/albums.js";

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();

    var pinkId = "";
    try {
        const band = await bandFunctions.create(
            "Pink Floyd",
            ["Progressive Rock", "Psychedelic Rock", "Classic Rock"],
            "http://www.pinkfloyd.com",
            "EMI",
            [
                "Roger Waters",
                "David Gilmour",
                "Nick Mason",
                "Richard Wright",
                "Sid Barrett",
            ],
            1965
        );
        pinkId = band._id;
        console.log(band);
    } catch (e) {
        console.log(e);
    }

    // var lpId = "";
    // try {
    //     const band = await bandFunctions.create(
    //         "Linking Park",
    //         [
    //             "Alternative rock",
    //             "nu metal",
    //             "alternative metal",
    //             "rap",
    //             "rock",
    //             "electronic rock",
    //             "pop rock",
    //         ],
    //         "http://www.linkinpark.com/",
    //         "Warner",
    //         [
    //             "Chester Bennington",
    //             "Mike Shinoda",
    //             "Brad Delson",
    //             "Rob Bourdon",
    //             "Joe Hahn",
    //             "Dave Farrell",
    //         ],
    //         1996
    //     );
    //     console.log(band);
    //     lpId = band._id;
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const band = await bandFunctions.getAll();
    //     console.log(band);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const band = await bandFunctions.get(pinkId);
    //     console.log(band);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const band = await bandFunctions.update(
    //         lpId,
    //         "Linking Park",
    //         [
    //             "Alternative rock",
    //             "nu metal",
    //             "alternative metal",
    //             "rap",
    //             "rock",
    //             "electronic rock",
    //             "pop rock",
    //         ],
    //         "http://www.linkinpark.com/",
    //         "Warner",
    //         [
    //             "Mike Shinoda",
    //             "Brad Delson",
    //             "Rob Bourdon",
    //             "Joe Hahn",
    //             "Dave Farrell",
    //         ],
    //         1996
    //     );
    //     console.log(band);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const band = await bandFunctions.remove(pinkId);
    //     console.log(band);
    // } catch (e) {
    //     console.log(e);
    // }

    // var albumId = "";
    // try {
    //     const album = await albumFunctions.create(
    //         lpId,
    //         "Wish You Were Here",
    //         "09/12/2000",
    //         [
    //             "Shine On You Crazy Diamond, Pts. 1-5",
    //             "Welcome to the Machine",
    //             "Have a Cigar (Ft. Roy Harper)",
    //             "Wish You Were Here",
    //             "Shine On You Crazy Diamond, Pts. 6-9",
    //         ],
    //         5
    //     );
    //     console.log(album);
    //     albumId = album._id;
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const album = await albumFunctions.create(
    //         lpId,
    //         "Wish You Were NOT Here",
    //         "09/12/2006",
    //         ["Song 1", "Song 2"],
    //         4
    //     );
    //     console.log(album);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const album = await albumFunctions.getAll(lpId);
    //     console.log(album);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const album = await albumFunctions.getAll(lpId);
    //     console.log(album);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const album = await albumFunctions.get(albumId);
    //     console.log(album);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const album = await albumFunctions.remove(albumId);
    //     console.log(album);
    // } catch (e) {
    //     console.log(e);
    // }

    await closeConnection();
}

main();
