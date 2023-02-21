import { bands } from "./mongoCollections.js";
import { ObjectId } from "mongodb";

async function get(id) {
    const bandCollection = await bands();
    const band = await bandCollection.findOne({ _id: new ObjectId(id) });
    if (band === null) throw "No band with that id";
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
    let newBand = {
        name: name,
        genre: genre,
        website: website,
        recordCompany: recordCompany,
        groupMembers: groupMembers,
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
    const bandCollection = await bands();
    const deletionInfo = await bandCollection.findOneAndDelete({
        _id: new ObjectId(id),
    });

    if (deletionInfo.lastErrorObject.n === 0) {
        throw `Could not delete dog with id of ${id}`;
    }
    // console.log(deletionInfo);
    return `${deletionInfo.value.name} has been successfully deleted.`;
}

async function rename(id, newName) {
    const bandCollection = await bands();
    const updateInfo = await bandCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { name: newName } }
    );
    if (updateInfo.modifiedCount === 0) throw "No band with that id";

    const updatedBand = get(id);
    return updatedBand;
}

export { create, getAll, get, remove, rename };
