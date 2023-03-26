import * as bandFunctions from "./data/bands.js";
import { ObjectId } from "mongodb";
import { bands } from "./config/mongoCollections.js";
import moment from "moment";

async function updateRating(bandId) {
    const bandCollection = await bands();
    const band = await bandFunctions.get(bandId);
    var overallRating = 0;
    if (band.albums.length > 0) {
        for (let i = 0; i < band.albums.length; i++) {
            overallRating += band.albums[i].rating;
        }
        overallRating = overallRating / band.albums.length;
        if (!Number.isInteger(overallRating)) {
            overallRating = parseFloat(overallRating.toFixed(1));
        }
    }
    const filter = { _id: new ObjectId(bandId) };
    const updateDoc = {
        $set: { overallRating: overallRating },
    };
    const updateInfo = await bandCollection.updateOne(filter, updateDoc);
    return overallRating;
}

function exists(...args) {
    for (let i = 0; i < args.length; i++) {
        if (!args[i]) {
            return false;
        }
    }
    return true;
}

function isValidString(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== "string" || args[i].trim() === "") {
            return false;
        }
    }
    return true;
}

function isValidArray(...args) {
    for (let i = 0; i < args.length; i++) {
        if (!Array.isArray(args[i]) || args[i].length == 0) {
            return false;
        }
    }
    return true;
}

function isValidDate(dateString, format) {
    const minDate = moment("01/01/1900", "MM/DD/YYYY");
    const maxDate = moment("12/31/2024", "MM/DD/YYYY");
    const date = moment(dateString, format);
    return date.isValid() && date.isBetween(minDate, maxDate, "day", "[]");
}

function isValidRating(rating) {
    if (isNaN(rating)) return false;
    return rating >= 1 && rating <= 5 && (rating * 10) % 1 === 0;
}

export {
    updateRating,
    exists,
    isValidString,
    isValidArray,
    isValidDate,
    isValidRating,
};
