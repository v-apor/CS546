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

    if (!helper.exists(bandId)) throw new Error("No bandId provided");
    if (!helper.isValidString(bandId))
        throw new Error("bandId must be a non-empty string");
    if (!ObjectId.isValid(bandId)) throw new Error("Invalid ObjectId provided");

    if (!helper.exists(bandId, title, releaseDate, tracks, rating)) {
        throw new Error("All fields are required");
    }

    if (!helper.isValidArray(tracks)) {
        throw new Error("tracks must be a valid non-empty array.");
    }

    if (!helper.isValidString(title, releaseDate, ...tracks)) {
        throw new Error(
            "title, releaseDate and all tracks members must be non-empty strings"
        );
    }

    if (!helper.isValidDate(releaseDate, "MM/DD/YYYY"))
        throw new Error(
            "Date must be a valid mm/dd/yyyy format and must be between 1900 and the end of next year"
        );

    if (!helper.isValidRating(rating))
        throw new Error(
            "The rating must be between 1-5 and can have upto 1 decimal place"
        );

    const bandCollection = await bands();
    var band = await bandFunctions.get(bandId);

    for (let i = 0; i < band.albums.length; i++) {
        if (
            band.albums[i].title.toLowerCase().trim() ===
            title.toLowerCase().trim()
        ) {
            throw new Error("Album with same title already exists");
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
    if (!helper.exists(bandId)) throw new Error("No bandId provided");
    if (!helper.isValidString(bandId))
        throw new Error("bandId must be a non-empty string");
    if (!ObjectId.isValid(bandId)) throw new Error("Invalid ObjectId provided");
    const bandCollection = await bands();
    var band = await bandFunctions.get(bandId);
    for (let i = 0; i < band.albums.length; i++) {
        band.albums[i]._id = band.albums[i]._id.toString();
    }
    return band.albums;
};

const get = async (albumId) => {
    if (!helper.exists(albumId)) throw new Error("No albumId provided");
    if (!helper.isValidString(albumId))
        throw new Error("albumId must be a non-empty string");
    if (!ObjectId.isValid(albumId)) throw new Error("Invalid albumId provided");

    const bandCollection = await bands();
    const filter = { "albums._id": new ObjectId(albumId) };
    var band = await bandCollection.find(filter).toArray();
    if (band.length == 0) throw new Error("The provided album doesn't exists");
    band = band[0];
    for (let i = 0; i < band.albums.length; i++) {
        if (band.albums[i]._id.toString() == albumId) {
            band.albums[i]._id = albumId;
            return band.albums[i];
        }
    }
};

const remove = async (albumId) => {
    if (!helper.exists(albumId)) throw new Error("No albumId provided");
    if (!helper.isValidString(albumId))
        throw new Error("albumId must be a non-empty string");
    if (!ObjectId.isValid(albumId)) throw new Error("Invalid albumId provided");

    const bandCollection = await bands();
    var filter = { "albums._id": new ObjectId(albumId) };
    var band = await bandCollection.find(filter).toArray();
    if (band.length == 0) throw new Error("The provided album doesn't exist");

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
