// This data file should export all functions using the ES6 standard as shown in the lecture code

import * as bandFunctions from "./bands.js";
import { albums, bands } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

const create = async (bandId, title, releaseDate, tracks, rating) => {
    const newAlbum = {
        title: title,
        releaseDate: releaseDate,
        tracks: tracks,
        rating: rating,
    };

    const albumCollection = await albums();
    const insertInfo = await albumCollection.insertOne(newAlbum);

    if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw new Error("Could not add the band");

    const newId = insertInfo.insertedId.toString();
    const album = await get(newId);

    // Inserting the album in the band

    const bandCollection = await bands();
    var band = await bandFunctions.get(bandId);
    band.overallRating =
        (band.overallRating * band.albums.length + rating) /
        (band.albums.length + 1);
    band.albums.push(album);

    const filter = { _id: new ObjectId(bandId) };
    const updateDoc = {
        $set: { albums: band.albums, overallRating: band.overallRating },
    };
    const updateInfo = await bandCollection.updateOne(filter, updateDoc);

    return album;
};

const getAll = async (bandId) => {
    const bandCollection = await bands();
    var band = await bandFunctions.get(bandId);
    return band.albums;
};

const get = async (albumId) => {
    const albumCollection = await albums();
    const album = await albumCollection.findOne({ _id: new ObjectId(albumId) });
    if (!album) throw new Error("No band with that id");

    album._id = album._id.toString();
    return album;
};

const remove = async (albumId) => {
    const albumCollection = await albums();
    const album = await albumCollection.deleteOne({
        _id: new ObjectId(albumId),
    });

    const bandCollection = await bands();
    const allBandsByFilter = await bandCollection
        .find({ "albums._id": albumId })
        .toArray();
    const bandId = allBandsByFilter[0]._id;

    const result = await bandCollection.updateOne(
        { _id: bandId },
        { $pull: { albums: { _id: albumId } } }
    );

    return bandFunctions.get(bandId);
};

export { create, getAll, get, remove };
