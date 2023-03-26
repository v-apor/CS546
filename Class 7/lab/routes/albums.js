// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

import * as albumFunctions from "../data/albums.js";
import * as bandFunctions from "../data/bands.js";
import * as helper from "../helpers.js";
import { ObjectId } from "mongodb";

import { Router } from "express";
const router = Router();

router
    .route("/:bandId")
    .get(async (req, res) => {
        const id = req.params.bandId;
        if (!helper.exists(id)) {
            return res.status(400).send({
                error: "No id provided",
            });
        }
        if (!helper.isValidString(id)) {
            return res.status(400).send({
                error: "id must be a non-empty string",
            });
        }

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({
                error: "Invalid ObjectId provided",
            });
        }

        try {
            const bandAlbums = await albumFunctions.getAll(req.params.bandId);
            res.send(bandAlbums);
        } catch (e) {
            res.status(e.code).send({ error: e.msg });
        }
    })
    .post(async (req, res) => {
        const body = req.body;
        const id = req.params.bandId;
        if (!helper.exists(id)) {
            return res.status(400).send({
                error: "No id provided",
            });
        }
        if (!helper.isValidString(id)) {
            return res.status(400).send({
                error: "id must be a non-empty string",
            });
        }

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({
                error: "Invalid ObjectId provided",
            });
        }
        if (
            !helper.exists(
                req.params.bandId,
                body.title,
                body.releaseDate,
                body.tracks,
                body.rating
            )
        ) {
            return res.status(400).send({ error: "All fields are required" });
        }

        if (!helper.isValidArray(body.tracks) || body.tracks.length < 3) {
            return res.status(400).send({
                error: "tracks must be a valid non-empty array with atleast 3 tracks.",
            });
        }

        if (
            !helper.isValidString(body.title, body.releaseDate, ...body.tracks)
        ) {
            return res.status(400).send({
                error: "title, releaseDate and all tracks members must be non-empty strings",
            });
        }

        if (
            !helper.isValidDate(body.releaseDate, "MM/DD/YYYY") ||
            body.releaseDate.length != 10
        ) {
            return res.status(400).send({
                error: "Date must be a valid mm/dd/yyyy format and must be between 1900 and the end of next year",
            });
        }

        if (!helper.isValidRating(body.rating)) {
            return res.status(400).send({
                error: "The rating must be between 1-5 and can have upto 1 decimal place",
            });
        }
        try {
            const newAlbum = await albumFunctions.create(
                req.params.bandId,
                body.title,
                body.releaseDate,
                body.tracks,
                body.rating
            );
            const updatedBand = await bandFunctions.get(req.params.bandId);
            res.send(updatedBand);
        } catch (e) {
            res.status(e.code).send({ error: e.msg });
        }
    });

router
    .route("/album/:albumId")
    .get(async (req, res) => {
        const id = req.params.albumId;
        if (!helper.exists(id)) {
            return res.status(400).send({
                error: "No id provided",
            });
        }
        if (!helper.isValidString(id)) {
            return res.status(400).send({
                error: "id must be a non-empty string",
            });
        }

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({
                error: "Invalid ObjectId provided",
            });
        }
        try {
            const album = await albumFunctions.get(req.params.albumId);
            res.send(album);
        } catch (e) {
            res.status(e.code).send({ error: e.msg });
        }
    })
    .delete(async (req, res) => {
        const id = req.params.albumId;
        if (!helper.exists(id)) {
            return res.status(400).send({
                error: "No id provided",
            });
        }
        if (!helper.isValidString(id)) {
            return res.status(400).send({
                error: "id must be a non-empty string",
            });
        }

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({
                error: "Invalid ObjectId provided",
            });
        }

        try {
            const album = await albumFunctions.remove(req.params.albumId);
            res.send({ albumId: req.params.albumId, deleted: true });
        } catch (e) {
            res.status(e.code).send({ error: e.msg });
        }
    });

export default router;
