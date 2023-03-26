// This data file should export all functions using the ES6 standard as shown in the lecture code

import * as bandFunctions from "./bands.js";
import { bands } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";
import * as helper from "../helpers.js";

const create = async (bandId, title, releaseDate, tracks, rating) => {
    const newAlbum = {
        _id: new ObjectId(),
        title: title,
        releaseDate: releaseDate,
        tracks: tracks,
        rating: rating,
    };

    if (!helper.exists(bandId)) {
        const error = new Error();
        error.msg = "No bandId provided";
        error.code = 400;
        throw error;
    }
    if (!helper.isValidString(bandId)) {
        const error = new Error();
        error.msg = "bandId must be a non-empty string";
        error.code = 400;
        throw error;
    }
    if (!ObjectId.isValid(bandId)) {
        const error = new Error();
        error.msg = "Invalid ObjectId provided";
        error.code = 400;
        throw error;
    }

    if (!helper.exists(bandId, title, releaseDate, tracks, rating)) {
        const error = new Error();
        error.msg = "All fields are required";
        error.code = 400;
        throw error;
    }

    if (!helper.isValidArray(tracks) || tracks.length < 3) {
        const error = new Error();
        error.msg =
            "tracks must be a valid non-empty array with atleast 3 tracks.";
        error.code = 400;

        throw error;
    }

    if (!helper.isValidString(title, releaseDate, ...tracks)) {
        const error = new Error();
        error.msg =
            "title, releaseDate and all tracks members must be non-empty strings";
        error.code = 400;

        throw error;
    }

    if (
        !helper.isValidDate(releaseDate, "MM/DD/YYYY") ||
        releaseDate.length != 10
    ) {
        const error = new Error();
        error.msg =
            "Date must be a valid mm/dd/yyyy format and must be between 1900 and the end of next year";
        error.code = 400;
        throw error;
    }
    if (!helper.isValidRating(rating)) {
        const error = new Error();
        error.msg =
            "The rating must be between 1-5 and can have upto 1 decimal place";
        error.code = 400;
        throw error;
    }

    const bandCollection = await bands();
    var band = await bandFunctions.get(bandId);

    for (let i = 0; i < band.albums.length; i++) {
        if (
            band.albums[i].title.toLowerCase().trim() ===
            title.toLowerCase().trim()
        ) {
            const error = new Error();
            error.msg = "Album with same title already exists";
            error.code = 400;
            throw error;
        }
    }

    band.albums.push(newAlbum);

    const filter = { _id: new ObjectId(bandId) };
    var updateDoc = {
        $set: { albums: band.albums },
    };

    var updateInfo = await bandCollection.updateOne(filter, updateDoc);
    const overallRating = await helper.updateRating(bandId);
    updateDoc = {
        $set: { overallRating: overallRating },
    };
    updateInfo = await bandCollection.updateOne(filter, updateDoc);

    newAlbum._id = newAlbum._id.toString();
    return newAlbum;
};

const getAll = async (bandId) => {
    if (!helper.exists(bandId)) {
        const error = new Error();
        error.msg = "No bandId provided";
        error.code = 400;
        throw error;
    }
    if (!helper.isValidString(bandId)) {
        const error = new Error();
        error.msg = "bandId must be a non-empty string";
        error.code = 400;
        throw error;
    }
    if (!ObjectId.isValid(bandId)) {
        const error = new Error();
        error.msg = "Invalid ObjectId provided";
        error.code = 400;
        throw error;
    }
    const bandCollection = await bands();
    var band = await bandFunctions.get(bandId);
    for (let i = 0; i < band.albums.length; i++) {
        band.albums[i]._id = band.albums[i]._id.toString();
    }
    return band.albums;
};

const get = async (albumId) => {
    if (!helper.exists(albumId)) {
        const error = new Error();
        error.msg = "No albumId provided";
        error.code = 400;
        throw error;
    }
    if (!helper.isValidString(albumId)) {
        const error = new Error();
        error.msg = "albumId must be a non-empty string";
        error.code = 400;
        throw error;
    }
    if (!ObjectId.isValid(albumId)) {
        const error = new Error();
        error.msg = "Invalid ObjectId provided";
        error.code = 400;
        throw error;
    }

    const bandCollection = await bands();
    const filter = { "albums._id": new ObjectId(albumId) };
    var band = await bandCollection.find(filter).toArray();
    if (band.length == 0) {
        const error = new Error();
        error.msg = "The provided album doesn't exists";
        error.code = 404;
        throw error;
    }
    band = band[0];
    for (let i = 0; i < band.albums.length; i++) {
        if (band.albums[i]._id.toString() == albumId) {
            band.albums[i]._id = albumId;
            return band.albums[i];
        }
    }
};

const remove = async (albumId) => {
    if (!helper.exists(albumId)) {
        const error = new Error();
        error.msg = "No albumId provided";
        error.code = 400;
        throw error;
    }
    if (!helper.isValidString(albumId)) {
        const error = new Error();
        error.msg = "albumId must be a non-empty string";
        error.code = 400;
        throw error;
    }
    if (!ObjectId.isValid(albumId)) {
        const error = new Error();
        error.msg = "Invalid ObjectId provided";
        error.code = 400;
        throw error;
    }

    const bandCollection = await bands();
    var filter = { "albums._id": new ObjectId(albumId) };
    var band = await bandCollection.find(filter).toArray();
    if (band.length == 0) {
        const error = new Error();
        error.msg = "The provided album doesn't exist";
        error.code = 404;
        throw error;
    }

    band = band[0];
    for (let i = 0; i < band.albums.length; i++) {
        if (band.albums[i]._id.toString() == albumId) {
            band.albums.splice(i, 1);
            break;
        }
    }
    filter = { _id: band._id };
    const updateDoc = {
        $set: { albums: band.albums },
    };
    const updateInfo = await bandCollection.updateOne(filter, updateDoc);
    const overallRating = await helper.updateRating(band._id.toString());
    return bandFunctions.get(band._id.toString());
};

export { create, getAll, get, remove };
