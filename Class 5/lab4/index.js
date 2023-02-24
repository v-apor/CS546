import { dbConnection, closeConnection } from "./mongoConnection.js";
import * as bands from "./bands.js";

const db = await dbConnection();
await db.dropDatabase();

try {
    const band = await bands.create(
        "Pink Floyd",
        ["Progressive Rock", "Psychedelic rock", "Classic Rock"],
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
    console.log(band);
} catch (e) {
    console.log(e);
}

let test_id = 0; // FOR TESTING! REMOVE LATER!!!!
try {
    const band = await bands.create(
        "PAT Rockers",
        ["Mettalic Rock"],
        "http://www.PATrockers.com",
        "EMI",
        ["Palak Kamle", "Apoorv Chandrakar", "Tushar Samanta"],
        2011
    );
    test_id = band._id; // FOR TESTING! REMOVE LATER!!!!
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
    let id = test_id; // FOR TESTING! REMOVE LATER!!!!
    const bandId = await bands.get(id); // FOR TESTING!! PROVIDE string ID later
    console.log(bandId);
} catch (e) {
    console.log(e);
}

try {
    const bandId = await bands.get("146175cdbfce3da117ad3943");
    console.log(bandId);
} catch (e) {
    console.log(e);
}

// try {
//     let id = test_id; // FOR TESTING! REMOVE LATER!!!!
//     const bandId = await bands.remove(id);
//     console.log(bandId);
// } catch (e) {
//     console.log(e);
// }

try {
    const allBands = await bands.getAll();
    console.log(allBands);
} catch (e) {
    console.log(e);
}

try {
    let id = test_id; // FOR TESTING! REMOVE LATER!!!!
    const renamedBand = await bands.rename(id, "pat RoCkERS  ");
    console.log(renamedBand);
} catch (e) {
    console.log(e);
}

try {
    let id = test_id; // FOR TESTING! REMOVE LATER!!!!
    const renamedBand = await bands.rename(id, "TAP Rockers");
    console.log(renamedBand);
} catch (e) {
    console.log(e);
}

try {
    const allBands = await bands.getAll();
    console.log(allBands);
} catch (e) {
    console.log(e);
}
await closeConnection();
