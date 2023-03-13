import express from "express";
const app = express();
import configRoutes from "./routes/index.js";

app.use(express.json());

configRoutes(app);

app.listen(3000, () => {
    console.log("Live on http://localhost:3000");
});

// import { dbConnection, closeConnection } from "./config/mongoConnection.js";
// import * as bands from "./data/bands.js";
// import * as albums from "./data/albums.js";

// async function main() {
//     const db = await dbConnection();
//     await db.dropDatabase();
//     var toRemove = "";
//     try {
//         const band = await bands.create(
//             "Pink Floyd",
//             ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
//             "http://www.pinkfloyd.com",
//             "EMI",
//             [
//                 "Roger Waters",
//                 "David Gilmour",
//                 "Nick Mason",
//                 "Richard Wright",
//                 "Sid Barrett",
//             ],
//             1965
//         );
//         toRemove = band._id;
//         console.log(band);
//     } catch (e) {
//         console.log(e);
//     }

//     // try {
//     //     const band = await bands.create(
//     //         "Dank Loyd",
//     //         ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
//     //         "http://www.pinkfloyd.com",
//     //         "EMI",
//     //         [
//     //             "Roger Waters",
//     //             "David Gilmour",
//     //             "Nick Mason",
//     //             "Richard Wright",
//     //             "Sid Barrett",
//     //         ],
//     //         2011
//     //     );
//     //     console.log(band);
//     // } catch (e) {
//     //     console.log(e);
//     // }

//     // try {
//     //     const band = await bands.getAll();
//     //     console.log(band);
//     // } catch (e) {
//     //     console.log(e);
//     // }

//     // var toUpdate = toRemove;
//     // try {
//     //     const band = await bands.update(
//     //         toUpdate,
//     //         "Pink Floyd Updated",
//     //         ["Oppressive Rock", "Awake rock", "Modern Rock"],
//     //         "http://www.pinkfloyd.com",
//     //         "EMI",
//     //         [
//     //             "Roger Waters",
//     //             "David Gilmour",
//     //             "Nick Mason",
//     //             "Richard Wright",
//     //             "Sid Barrett",
//     //         ],
//     //         1965
//     //     );
//     //     console.log(band);
//     // } catch (e) {
//     //     console.log(e);
//     // }

//     // try {
//     //     const band = await bands.remove(toRemove);
//     //     console.log(band);
//     // } catch (e) {
//     //     console.log(e);
//     // }

//     try {
//         const album = await albums.create(
//             toRemove,
//             "Metallica",
//             2011,
//             ["numb", "in the end"],
//             5
//         );
//         console.log(album);
//     } catch (e) {
//         console.log(e);
//     }

//     try {
//         const album = await albums.create(
//             toRemove,
//             "Hybrid Theory",
//             2014,
//             ["Catalyst", "What I've done"],
//             4
//         );
//         console.log(album);
//     } catch (e) {
//         console.log(e);
//     }

//     var albumId = "";
//     try {
//         const album = await albums.getAll(toRemove);
//         albumId = album[0]._id;
//         // console.log(albumId, "~~~");
//         // console.log(album);
//     } catch (e) {
//         console.log(e);
//     }

//     try {
//         const band = await bands.getAll();
//         console.log(band);
//     } catch (e) {
//         console.log(e);
//     }

//     try {
//         const album = await albums.remove(albumId);
//         console.log(album);
//     } catch (e) {
//         console.log(e);
//     }

//     try {
//         const band = await bands.getAll();
//         console.log(band);
//     } catch (e) {
//         console.log(e);
//     }
//     await closeConnection();
// }

// main();
