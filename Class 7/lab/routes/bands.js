// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!
import * as bands from "../data/bands.js";

import { Router } from "express";
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
        const newBand = await bands.create(
            body.name,
            body.genre,
            body.website,
            body.recordCompany,
            body.groupMembers,
            body.yearBandWasFormed
        );
        // console.log(newBand);
        res.send(newBand);
    });

router
    .route("/:id")
    .get(async (req, res) => {
        // console.log("ID: ", typeof req.params.id);
        const band = await bands.get(req.params.id);
        res.send(band);
    })
    .delete(async (req, res) => {
        const deleteResponse = await bands.remove(req.params.id);
        res.send({ bandId: req.params.id, deleted: true });
    })
    .put(async (req, res) => {
        const body = req.body;
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
    });

export default router;
