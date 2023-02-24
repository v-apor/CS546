import { bands } from "./mongoCollections.js";
import { ObjectId } from "mongodb";

async function get(id) {
    if (!id) throw "No id provided";
    if (typeof id !== "string" || id.trim().length === 0)
        throw "Invalid id provided";
    if (!ObjectId.isValid(id)) throw "Invalid ObjectId provided";

    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: new ObjectId(id) });
    if (!band) throw "No band with that id";

    band._id = band._id.toString();
    return band;
}

async function getAll() {
    const bandCollection = await bands();
    let bandList = await bandCollection.find({}).toArray();
    if (!bandList) throw "Could not get all bands";
    bandList = bandList.map((element) => {
        element._id = element._id.toString();
        return element;
    });
    return bandList;
}

async function create(
    name,
    genre,
    website,
    recordCompany,
    groupMembers,
    yearBandWasFormed
) {
    if (
        !name ||
        !genre ||
        !website ||
        !recordCompany ||
        !groupMembers ||
        !yearBandWasFormed
    ) {
        throw "All fields are required";
    }

    if (
        typeof name !== "string" ||
        name.trim() === "" ||
        typeof website !== "string" ||
        website.trim() === "" ||
        typeof recordCompany !== "string" ||
        recordCompany.trim() === ""
    ) {
        throw "Name, website, and recordCompany must be non-empty strings";
    }

    if (!/^http:\/\/www\..+\.com$/.test(website)) {
        throw "Website must be a valid http://www.example.com format and have at least 5 characters in-between";
    }

    if (
        !Array.isArray(genre) ||
        genre.length === 0 ||
        !genre.every((g) => typeof g === "string" && g.trim() !== "") ||
        !Array.isArray(groupMembers) ||
        groupMembers.length === 0 ||
        !groupMembers.every((m) => typeof m === "string" && m.trim() !== "")
    ) {
        throw "Genre and groupMembers must be non-empty arrays containing at least one valid string element";
    }

    if (
        typeof yearBandWasFormed !== "number" ||
        isNaN(yearBandWasFormed) ||
        yearBandWasFormed < 1900 ||
        yearBandWasFormed > new Date().getFullYear()
    ) {
        throw "Year band was formed must be a number between 1900 and the current year (2023)";
    }

    let newBand = {
        name: name.trim(),
        genre: genre.map((g) => g.trim()),
        website: website.trim(),
        recordCompany: recordCompany.trim(),
        groupMembers: groupMembers.map((m) => m.trim()),
        yearBandWasFormed: yearBandWasFormed,
    };

    const bandCollection = await bands();
    const insertInfo = await bandCollection.insertOne(newBand);

    if (!insertInfo.acknowledged || !insertInfo.insertedId)
        throw "Could not add the band";

    const newId = insertInfo.insertedId.toString();

    const band = await get(newId);
    return band;
}

async function remove(id) {
    if (!id) throw "No id provided";
    if (typeof id !== "string" || id.trim().length === 0)
        throw "Invalid id provided";
    if (!ObjectId.isValid(id)) throw "Invalid ObjectId provided";

    const bandCollection = await bands();
    const deletionInfo = await bandCollection.findOneAndDelete({
        _id: new ObjectId(id),
    });

    if (!deletionInfo.value) {
        throw `No band with id of ${id} found.`;
    }

    const bandName = deletionInfo.value.name;
    return `${bandName} has been successfully deleted!`;
}

async function rename(id, newName) {
    if (!id || typeof id !== "string" || id.trim().length === 0) {
        throw "Invalid id";
    }
    if (!ObjectId.isValid(id)) {
        throw "Invalid id";
    }
    if (
        !newName ||
        typeof newName !== "string" ||
        newName.trim().length === 0
    ) {
        throw "New name must be a non-empty string";
    }

    const band = await get(id);
    if (band.name.toLowerCase().trim() === newName.toLowerCase().trim()) {
        throw "New name cannot be the same as current name";
    }

    const bandCollection = await bands();
    const updateInfo = await bandCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { name: newName.trim() } }
    );
    if (updateInfo.modifiedCount === 0) throw "No band with that id";

    const updatedBand = await get(id);
    return updatedBand;
}

export { create, getAll, get, remove, rename };
