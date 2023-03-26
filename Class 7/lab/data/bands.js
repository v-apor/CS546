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
        throw new Error("All fields are required");
    }

    if (!helper.isValidArray(genre, groupMembers)) {
        throw new Error(
            "genre and groupMembers must be a valid non-empty array."
        );
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
        throw new Error(
            "Name, website, recordCompany, all genres and all group members must be non-empty strings"
        );
    }

    if (!/^http:\/\/www\.[\w-]{5,}\.com$/.test(website)) {
        throw new Error(
            "Website must be a valid format and have at least 5 characters in-between http://www. and .com"
        );
    }

    if (
        typeof yearBandWasFormed !== "number" ||
        isNaN(yearBandWasFormed) ||
        yearBandWasFormed < 1900 ||
        yearBandWasFormed > new Date().getFullYear()
    ) {
        throw new Error(
            "Year band was formed must be a number between 1900 and the current year (2023)"
        );
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
    if (!helper.exists(id)) throw new Error("No id provided");
    if (!helper.isValidString(id))
        throw new Error("id must be a non-empty string");
    if (!ObjectId.isValid(id)) throw new Error("Invalid ObjectId provided");

    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: new ObjectId(id) });
    if (!band) throw new Error("No band with that id");

    band._id = band._id.toString();
    return band;
};

const remove = async (id) => {
    if (!helper.exists(id)) throw new Error("No id provided");
    if (!helper.isValidString(id))
        throw new Error("id must be a non-empty string");
    if (!ObjectId.isValid(id)) throw new Error("Invalid ObjectId provided");

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
    if (!helper.exists(id)) throw new Error("No id provided");
    if (!helper.isValidString(id))
        throw new Error("id must be a non-empty string");
    if (!ObjectId.isValid(id)) throw new Error("Invalid ObjectId provided");

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
        throw new Error(
            "genre and groupMembers must be a valid non-empty array."
        );
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
        throw new Error(
            "Name, website, recordCompany, all genres and all group members must be non-empty strings"
        );
    }

    if (!/^http:\/\/www\.[\w-]{5,}\.com$/.test(website)) {
        throw new Error(
            "Website must be a valid format and have at least 5 characters in-between http://www. and .com"
        );
    }

    if (
        typeof yearBandWasFormed !== "number" ||
        isNaN(yearBandWasFormed) ||
        yearBandWasFormed < 1900 ||
        yearBandWasFormed > new Date().getFullYear()
    ) {
        throw new Error(
            "Year band was formed must be a number between 1900 and the current year (2023)"
        );
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
    if (band.name.toLowerCase().trim() === newName.toLowerCase().trim()) {
        throw new Error("New name cannot be the same as current name");
    }

    const updateInfo = await bandCollection.updateOne(filter, updateDoc);
    if (updateInfo.modifiedCount === 0) throw new Error("No band with that id");

    const updatedBand = await get(id);
    return updatedBand;
};

export { create, getAll, remove, update, get };
