// This data file should export all functions using the ES6 standard as shown in the lecture code

import { bands } from "../config/mongoCollections.js";
import * as helper from "../helpers.js";
import { ObjectId } from "mongodb";

const create = async (
    name,
    genre,
    website,
    recordCompany,
    groupMembers,
    yearBandWasFormed
) => {
    if (
        !helper.exists(
            name,
            genre,
            website,
            recordCompany,
            groupMembers,
            yearBandWasFormed
        )
    ) {
        const error = new Error();
        error.msg = "All fields are required";
        error.code = 400;

        throw error;
    }

    if (!helper.isValidArray(genre, groupMembers)) {
        const error = new Error();
        error.msg = "genre and groupMembers must be a valid non-empty array.";
        error.code = 400;

        throw error;
    }

    if (
        !helper.isValidString(
            name,
            ...genre,
            ...groupMembers,
            website,
            recordCompany
        )
    ) {
        const error = new Error();
        error.msg =
            "Name, website, recordCompany, all genres and all group members must be non-empty strings";
        error.code = 400;

        throw error;
    }

    if (!/^http:\/\/www\.[\w-]{5,}\.com$/.test(website)) {
        const error = new Error();
        error.msg =
            "Website must be a valid format and have at least 5 characters in-between http://www. and .com";
        error.code = 400;

        throw error;
    }

    if (
        typeof yearBandWasFormed !== "number" ||
        isNaN(yearBandWasFormed) ||
        yearBandWasFormed < 1900 ||
        yearBandWasFormed > new Date().getFullYear()
    ) {
        const error = new Error();
        error.msg =
            "Year band was formed must be a number between 1900 and the current year (2023)";
        error.code = 400;

        throw error;
    }

    let newBand = {
        name: name.trim(),
        genre: genre.map((g) => g.trim()),
        website: website.trim(),
        recordCompany: recordCompany.trim(),
        groupMembers: groupMembers.map((m) => m.trim()),
        yearBandWasFormed: yearBandWasFormed,
        albums: [],
        overallRating: 0,
    };

    const bandCollection = await bands();
    const insertInfo = await bandCollection.insertOne(newBand);

    if (!insertInfo.acknowledged || !insertInfo.insertedId) {
        const error = new Error();
        error.msg = "Could not add the band";
        error.code = 400;

        throw error;
    }

    const newId = insertInfo.insertedId.toString();

    const band = await get(newId);
    return band;
};

const getAll = async () => {
    const bandCollection = await bands();
    let bandList = await bandCollection.find({}).toArray();
    if (!bandList) {
        const error = new Error();
        error.msg = "Could not get all bands";
        error.code = 400;

        throw error;
    }
    bandList = bandList.map((element) => {
        element._id = element._id.toString();
        return element;
    });
    return bandList;
};

const get = async (id) => {
    if (!helper.exists(id)) {
        const error = new Error();
        error.msg = "No id provided";
        error.code = 400;
        throw error;
    }
    if (!helper.isValidString(id)) {
        const error = new Error();
        error.msg = "id must be a non-empty string";
        error.code = 400;
        throw error;
    }
    if (!ObjectId.isValid(id)) {
        const error = new Error();
        error.msg = "Invalid ObjectId provided";
        error.code = 400;
        throw error;
    }

    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: new ObjectId(id) });
    if (!band) {
        const error = new Error();
        error.msg = "No band with that id";
        error.code = 404;
        throw error;
    }

    band._id = band._id.toString();
    return band;
};

const remove = async (id) => {
    if (!helper.exists(id)) {
        const error = new Error();
        error.msg = "No id provided";
        error.code = 400;

        throw error;
    }
    if (!helper.isValidString(id)) {
        const error = new Error();
        error.msg = "id must be a non-empty string";
        error.code = 400;

        throw error;
    }
    if (!ObjectId.isValid(id)) {
        const error = new Error();
        error.msg = "Invalid ObjectId provided";
        error.code = 400;

        throw error;
    }

    const bandCollection = await bands();
    const deletionInfo = await bandCollection.findOneAndDelete({
        _id: new ObjectId(id),
    });

    if (!deletionInfo.value) {
        const error = new Error();
        error.msg = `No band with id of ${id} found.`;
        error.code = 400;

        throw error;
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
    if (!helper.exists(id)) {
        const error = new Error();
        error.msg = "No id provided";
        error.code = 400;

        throw error;
    }
    if (!helper.isValidString(id)) {
        const error = new Error();
        error.msg = "id must be a non-empty string";
        error.code = 400;

        throw error;
    }
    if (!ObjectId.isValid(id)) {
        const error = new Error();
        error.msg = "Invalid ObjectId provided";
        error.code = 400;

        throw error;
    }

    if (
        !helper.exists(
            name,
            genre,
            website,
            recordCompany,
            groupMembers,
            yearBandWasFormed
        )
    ) {
        throw new Error("All fields are required");
    }

    if (!helper.isValidArray(genre, groupMembers)) {
        const error = new Error();
        error.msg = "genre and groupMembers must be a valid non-empty array.";
        error.code = 400;

        throw error;
    }

    if (
        !helper.isValidString(
            name,
            ...genre,
            ...groupMembers,
            website,
            recordCompany
        )
    ) {
        const error = new Error();
        error.msg =
            "Name, website, recordCompany, all genres and all group members must be non-empty strings";
        error.code = 400;

        throw error;
    }

    if (!/^http:\/\/www\.[\w-]{5,}\.com$/.test(website)) {
        const error = new Error();
        error.msg =
            "Website must be a valid format and have at least 5 characters in-between http://www. and .com";
        error.code = 400;

        throw error;
    }

    if (
        typeof yearBandWasFormed !== "number" ||
        isNaN(yearBandWasFormed) ||
        yearBandWasFormed < 1900 ||
        yearBandWasFormed > new Date().getFullYear()
    ) {
        const error = new Error();
        error.msg =
            "Year band was formed must be a number between 1900 and the current year (2023)";
        error.code = 400;

        throw error;
    }

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

    const band = await get(id);
    if (band.name.toLowerCase().trim() === name.toLowerCase().trim()) {
        const error = new Error();
        error.msg = "New name cannot be the same as current name";
        error.code = 400;

        throw error;
    }

    const updateInfo = await bandCollection.updateOne(filter, updateDoc);
    if (updateInfo.modifiedCount === 0) {
        const error = new Error();
        error.msg = "No band with that id";
        error.code = 404;

        throw error;
    }

    const updatedBand = await get(id);
    return updatedBand;
};

export { create, getAll, remove, update, get };
