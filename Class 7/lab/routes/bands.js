// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!
import * as bands from "../data/bands.js";
import * as helper from "../helpers.js";
import { Router } from "express";
import { ObjectId } from "mongodb";
const router = Router();

router
    .route("/")
    .get(async (req, res) => {
        const allBands = await bands.getAll();
        const result = [];
        for (let x = 0; x < allBands.length; x++) {
            result.push({ _id: allBands[x]._id, name: allBands[x].name });
        }
        res.send(result);
    })
    .post(async (req, res) => {
        const body = req.body;
        if (
            !helper.exists(
                body.name,
                body.genre,
                body.website,
                body.recordCompany,
                body.groupMembers,
                body.yearBandWasFormed
            )
        ) {
            return res.status(400).send({ error: "All fields are required" });
        }

        if (!helper.isValidArray(body.genre, body.groupMembers)) {
            return res.status(400).send({
                error: "genre and groupMembers must be a valid non-empty array.",
            });
        }

        if (
            !helper.isValidString(
                body.name,
                ...body.genre,
                ...body.groupMembers,
                body.website,
                body.recordCompany
            )
        ) {
            return res.status(400).send({
                error: "Name, website, recordCompany, all genres and all group members must be non-empty strings",
            });
        }

        if (!/^http:\/\/www\.[\w-]{5,}\.com$/.test(body.website)) {
            return res.status(400).send({
                error: "Website must be a valid format and have at least 5 characters in-between http://www. and .com",
            });
        }

        if (
            typeof body.yearBandWasFormed !== "number" ||
            isNaN(body.yearBandWasFormed) ||
            body.yearBandWasFormed < 1900 ||
            body.yearBandWasFormed > new Date().getFullYear()
        ) {
            return res.status(400).send({
                error: "Year band was formed must be a number between 1900 and the current year (2023)",
            });
        }

        try {
            const newBand = await bands.create(
                body.name,
                body.genre,
                body.website,
                body.recordCompany,
                body.groupMembers,
                body.yearBandWasFormed
            );
            res.send(newBand);
        } catch (e) {
            res.status(e.code).send({ error: e.msg });
        }
    });

router
    .route("/:id")
    .get(async (req, res) => {
        const id = req.params.id;

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
            const band = await bands.get(req.params.id);
            res.send(band);
        } catch (e) {
            res.status(e.code).send({ error: e.msg });
        }
    })
    .delete(async (req, res) => {
        const id = req.params.id;

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
            const deleteResponse = await bands.remove(req.params.id);
            res.send({ bandId: req.params.id, deleted: true });
        } catch (e) {
            res.status(e.code).send({ error: e.msg });
        }
    })
    .put(async (req, res) => {
        const body = req.body;

        const id = req.params.id;

        if (
            !helper.exists(
                body.name,
                body.genre,
                body.website,
                body.recordCompany,
                body.groupMembers,
                body.yearBandWasFormed
            )
        ) {
            return res.status(400).send({ error: "All fields are required" });
        }

        if (!helper.isValidArray(body.genre, body.groupMembers)) {
            return res.status(400).send({
                error: "genre and groupMembers must be a valid non-empty array.",
            });
        }

        if (
            !helper.isValidString(
                body.name,
                ...body.genre,
                ...body.groupMembers,
                body.website,
                body.recordCompany
            )
        ) {
            return res.status(400).send({
                error: "Name, website, recordCompany, all genres and all group members must be non-empty strings",
            });
        }

        if (!/^http:\/\/www\.[\w-]{5,}\.com$/.test(body.website)) {
            return res.status(400).send({
                error: "Website must be a valid format and have at least 5 characters in-between http://www. and .com",
            });
        }

        if (
            typeof body.yearBandWasFormed !== "number" ||
            isNaN(body.yearBandWasFormed) ||
            body.yearBandWasFormed < 1900 ||
            body.yearBandWasFormed > new Date().getFullYear()
        ) {
            return res.status(400).send({
                error: "Year band was formed must be a number between 1900 and the current year (2023)",
            });
        }

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
            const updatedBand = await bands.update(
                req.params.id,
                body.name,
                body.genre,
                body.website,
                body.recordCompany,
                body.groupMembers,
                body.yearBandWasFormed
            );
            res.send(updatedBand);
        } catch (e) {
            res.status(e.code).send({ error: e.msg });
        }
    });

export default router;
