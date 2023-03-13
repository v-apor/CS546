// This data file should export all functions using the ES6 standard as shown in the lecture code

import { bands } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

const create = async (
    name,
    genre,
    website,
    recordCompany,
    groupMembers,
    yearBandWasFormed
) => {
    let newBand = {
        name: name,
        genre: genre,
        website: website,
        recordCompany: recordCompany,
        groupMembers: groupMembers,
        yearBandWasFormed: yearBandWasFormed,
        albums: [],
        overallRating: 0,
    };
    const bandCollection = await bands();
    const insertInfo = await bandCollection.insertOne(newBand);

    if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw new Error("Could not add the band");

    const newId = insertInfo.insertedId.toString();

    const band = await get(newId);
    return band;
};

const getAll = async () => {
    const bandCollection = await bands();
    let bandList = await bandCollection.find({}).toArray();
    if (!bandList) throw new Error("Could not get all bands");
    bandList = bandList.map((element) => {
        element._id = element._id.toString();
        return element;
    });
    return bandList;
};

const get = async (id) => {
    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: new ObjectId(id) });
    if (!band) throw new Error("No band with that id");

    band._id = band._id.toString();
    return band;
};

const remove = async (id) => {
    const bandCollection = await bands();
    const deletionInfo = await bandCollection.findOneAndDelete({
        _id: new ObjectId(id),
    });

    if (!deletionInfo.value) {
        throw new Error(`No band with id of ${id} found.`);
    }

    const bandName = deletionInfo.value.name;
    return `${bandName} has been successfully deleted!`;
};

const update = async (
    id,
    name,
    genre,
    website,
    recordCompany,
    groupMembers,
    yearBandWasFormed
) => {
    const bandCollection = await bands();
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
        $set: {
            name: name,
            genre: genre,
            website: website,
            recordCompany: recordCompany,
            groupMembers: groupMembers,
            yearBandWasFormed: yearBandWasFormed,
        },
    };

    const updateInfo = await bandCollection.updateOne(filter, updateDoc);
    const updatedBand = await get(id);
    return updatedBand;
};

export { create, getAll, remove, update, get };
