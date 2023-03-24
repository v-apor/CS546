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

    const bandCollection = await bands();
    var band = await bandFunctions.get(bandId);
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
    const bandCollection = await bands();
    var band = await bandFunctions.get(bandId);
    for (let i = 0; i < band.albums.length; i++) {
        band.albums[i]._id = band.albums[i]._id.toString();
    }
    return band.albums;
};

const get = async (albumId) => {
    const bandCollection = await bands();
    const filter = { "albums._id": new ObjectId(albumId) };
    var band = await bandCollection.find(filter).toArray();
    band = band[0];
    for (let i = 0; i < band.albums.length; i++) {
        if (band.albums[i]._id.toString() == albumId) {
            band.albums[i]._id = albumId;
            return band.albums[i];
        }
    }
};

const remove = async (albumId) => {
    const bandCollection = await bands();
    var filter = { "albums._id": new ObjectId(albumId) };
    var band = await bandCollection.find(filter).toArray();
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
