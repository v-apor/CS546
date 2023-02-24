import { dbConnection, closeConnection } from "./config/mongoConnection.js";
import * as bands from "./data/bands.js";

// try {
//     const band = await bands.create(
//         "Pink Floyd",
//         ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
//         "http://www.pinkfloyd.com",
//         "EMI",
//         [
//             "Roger Waters",
//             "David Gilmour",
//             "Nick Mason",
//             "Richard Wright",
//             "Sid Barrett",
//         ],
//         1965
//     );
//     console.log(band);
// } catch (e) {
//     console.log(e);
// }

// let test_id = 0; // FOR TESTING! REMOVE LATER!!!!
// try {
//     const band = await bands.create(
//         "PAT Rockers",
//         ["Mettalic Rock"],
//         "http://www.PATrockers.com",
//         "EMI",
//         ["Palak Kamle", "Apoorv Chandrakar", "Tushar Samanta"],
//         2011
//     );
//     test_id = band._id; // FOR TESTING! REMOVE LATER!!!!
// } catch (e) {
//     console.log(e);
// }

// try {
//     const allBands = await bands.getAll();
//     console.log(allBands);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = test_id; // FOR TESTING! REMOVE LATER!!!!
//     const bandId = await bands.get(id); // FOR TESTING!! PROVIDE string ID later
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const bandId = await bands.get("146175cdbfce3da117ad3943");
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = test_id; // FOR TESTING! REMOVE LATER!!!!
//     const bandId = await bands.remove(id);
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const allBands = await bands.getAll();
//     console.log(allBands);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = test_id; // FOR TESTING! REMOVE LATER!!!!
//     const renamedBand = await bands.rename(id, "pat RoCkERS  ");
//     console.log(renamedBand);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = test_id; // FOR TESTING! REMOVE LATER!!!!
//     const renamedBand = await bands.rename(id, "TAP Rockers");
//     console.log(renamedBand);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const allBands = await bands.getAll();
//     console.log(allBands);
// } catch (e) {
//     console.log(e);
// }

// Visible cases
// async function main() {
// const db = await dbConnection();
// await db.dropDatabase();

//     let test_id = ""; // FOR TESTING! REMOVE LATER!!!!
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
//         test_id = band._id; // FOR TESTING! REMOVE LATER!!!!
//         console.log(band);
//     } catch (e) {
//         console.log(e);
//     }

// try {
//     const band = await bands.create(
//         "PAT Rockers",
//         ["Mettalic Rock"],
//         "http://www.PATrockers.com",
//         "EMI",
//         ["Palak Kamle", "Apoorv Chandrakar", "Tushar Samanta"],
//         2011
//     );
//     console.log(band);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const allBands = await bands.getAll();
//     console.log(allBands);
// } catch (e) {
//     console.log(e);
// }

//     try {
//         let id = test_id; // FOR TESTING! REMOVE LATER!!!!
//         const bandId = await bands.get(id); // FOR TESTING!! PROVIDE string ID later
//         console.log(bandId);
//     } catch (e) {
//         console.log(e);
//     }

// try {
//     let id = test_id; // FOR TESTING! REMOVE LATER!!!!
//     const bandId = await bands.remove(id);
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

//     try {
//         let id = test_id; // FOR TESTING! REMOVE LATER!!!!
//         const renamedBand = await bands.rename(id, "Red FLoyd");
//         console.log(renamedBand);
//     } catch (e) {
//         console.log(e);
//     }

// await closeConnection();
// }

// async function main() {
//     const db = await dbConnection();
//     await db.dropDatabase();

//     let pink_id = "";
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
//         pink_id = band._id;
//         console.log(band);
//     } catch (e) {
//         console.log(e);
//     }

// try {
//     const band = await bands.create(
//         "Blue Floyd",
//         ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
//         "http://www.pinkfloyd.com",
//         "EMI",
//         [
//             "Roger Waters",
//             "David Gilmour",
//             "Nick Mason",
//             "Richard Wright",
//             "Sid Barrett",
//         ],
//         1965
//     );
//     console.log(band);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const band = await bands.create(
//         "      ",
//         ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
//         "http://www.pinkfloyd.com",
//         "EMI",
//         [
//             "Roger Waters",
//             "David Gilmour",
//             "Nick Mason",
//             "Richard Wright",
//             "Sid Barrett",
//         ],
//         1965
//     );
//     console.log(band);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const band = await bands.create(
//         "Pink Floyd",
//         ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
//         "htttp://www.pinkfloyd.com",
//         "EMI",
//         [
//             "Roger Waters",
//             "David Gilmour",
//             "Nick Mason",
//             "Richard Wright",
//             "Sid Barrett",
//         ],
//         1965
//     );
//     console.log(band);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const band = await bands.create(
//         "Pink Floyd",
//         ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
//         "http://www.pf.com",
//         "EMI",
//         [
//             "Roger Waters",
//             "David Gilmour",
//             "Nick Mason",
//             "Richard Wright",
//             "Sid Barrett",
//         ],
//         1965
//     );
//     console.log(band);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const band = await bands.create(
//         "Pink Floyd",
//         ["Psychedelic rock", "Classic Rock"],
//         "http://www.pinkf.com",
//         "EMI",
//         ["Roger Waters", "David Gilmour", " ", "Richard Wright"],
//         1965
//     );
//     console.log(band);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const band = await bands.create(
//         "Pink Floyd",
//         ["Psychedelic rock", "Classic Rock"],
//         "http://www.pinkf.com",
//         "EMI",
//         ["Roger Waters", "David Gilmour", "Richard Wright"],
//         1900
//     );
//     console.log(band);
// } catch (e) {
//     console.log(e);
// }

// try {
//     const allBands = await bands.getAll();
//     console.log(allBands);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id; // FOR TESTING! REMOVE LATER!!!!
//     const bandId = await bands.get(id); // FOR TESTING!! PROVIDE string ID later
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id; // FOR TESTING! REMOVE LATER!!!!
//     const bandId = await bands.get("507f1f77bcf86cd7994390111"); // FOR TESTING!! PROVIDE string ID later
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id; // FOR TESTING! REMOVE LATER!!!!
//     const bandId = await bands.get(1231423523532); // FOR TESTING!! PROVIDE string ID later
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id; // FOR TESTING! REMOVE LATER!!!!
//     const bandId = await bands.get("  "); // FOR TESTING!! PROVIDE string ID later
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id;
//     const bandId = await bands.remove(id);
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id;
//     const bandId = await bands.remove();
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id;
//     const bandId = await bands.remove(12424412);
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id;
//     const bandId = await bands.remove("");
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id;
//     const renamedBand = await bands.rename(id, "Red FLoyd");
//     console.log(renamedBand);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id;
//     const renamedBand = await bands.rename(21, "Red FLoyd");
//     console.log(renamedBand);
// } catch (e) {
//     console.log(e);
// }
// try {
//     let id = pink_id;
//     const renamedBand = await bands.rename(id);
//     console.log(renamedBand);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id;
//     const renamedBand = await bands.rename(id, "   ");
//     console.log(renamedBand);
// } catch (e) {
//     console.log(e);
// }

// try {
//     let id = pink_id;
//     const renamedBand = await bands.rename(
//         pink_id.replace("a", "f"),
//         "Black FLoyd"
//     );
//     console.log(renamedBand);
// } catch (e) {
//     console.log(e);
// }

//     try {
//         let id = pink_id;
//         const renamedBand = await bands.rename(id, "Pink FLoyd");
//         console.log(renamedBand);
//     } catch (e) {
//         console.log(e);
//     }
//     await closeConnection();
// }

// main();

// task:

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();

    let lp_id = "";
    try {
        const band = await bands.create(
            "Linkin Park",
            ["Heavy Metal", "Alternative Rock"],
            "http://www.linkinpark.com",
            "Warner",
            ["RIP Chester", "Mike Shinoda", "Brad Delson", "Dave Farrell"],
            1996
        );
        lp_id = band._id;
        console.log(band);
    } catch (e) {
        console.log(e);
    }

    let gd_id = "";
    try {
        const band = await bands.create(
            "Green Day",
            ["Punk", "Rock", "Pop"],
            "http://www.greenday.com",
            "Warner",
            ["Billie Joe Armstrong", "Tre Cool", "Mike Dirnt"],
            1987
        );
        gd_id = band._id;
    } catch (e) {
        console.log(e);
    }

    try {
        const allBands = await bands.getAll();
        console.log(allBands);
    } catch (e) {
        console.log(e);
    }

    try {
        const band = await bands.create(
            "PAT Rockers",
            ["Pop", "Slow Rock", "Mettalic Rock"],
            "http://www.PATrockers.com",
            "TBD",
            ["Palak Kamle", "Apoorv Chandrakar", "Tushar Samanta"],
            2011
        );
        console.log(band);
    } catch (e) {
        console.log(e);
    }

    try {
        let id = lp_id;
        const renamedBand = await bands.rename(id, "LP");
        console.log(renamedBand);
    } catch (e) {
        console.log(e);
    }

    try {
        let id = gd_id;
        const removeMsg = await bands.remove(id);
        console.log(removeMsg);
    } catch (e) {
        console.log(e);
    }

    try {
        const allBands = await bands.getAll();
        console.log(allBands);
    } catch (e) {
        console.log(e);
    }

    try {
        const band = await bands.create(
            "Group Love ",
            ["Heavy Metal", "Alternative Rock"],
            "http://www.linkinpark.com",
            "Warner",
            ["RIP Chester", "Mike Shinoda", "Brad Delson", "Dave Farrell"],
            2024
        );
        lp_id = band._id;
        console.log(band);
    } catch (e) {
        console.log(e);
    }

    try {
        const removeMsg = await bands.remove("507f1f77bcf86cd799439011");
        console.log(removeMsg);
    } catch (e) {
        console.log(e);
    }

    try {
        let id = lp_id;
        const renamedBand = await bands.rename(
            "507f1f77bcf86cd799439011",
            "NWIL"
        );
        console.log(renamedBand);
    } catch (e) {
        console.log(e);
    }

    try {
        let id = lp_id;
        const renamedBand = await bands.rename(id, "     ");
        console.log(renamedBand);
    } catch (e) {
        console.log(e);
    }

    try {
        const band = await bands.get("507f1f77bcf86cd799439011");
        console.log(band);
    } catch (e) {
        console.log(e);
    }

    // Closing Connection
    await closeConnection();
}

main();
