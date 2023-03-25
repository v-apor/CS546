// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

import * as albumFunctions from "../data/albums.js";
import * as bandFunctions from "../data/bands.js";

import { Router } from "express";
const router = Router();

router
    .route("/:bandId")
    .get(async (req, res) => {
        const bandAlbums = await albumFunctions.getAll(req.params.bandId);
        res.send(bandAlbums);
    })
    .post(async (req, res) => {
        const body = req.body;
        // console.log(body);
        const newAlbum = await albumFunctions.create(
            req.params.bandId,
            body.title,
            body.releaseDate,
            body.tracks,
            body.rating
        );
        const updatedBand = await bandFunctions.get(req.params.bandId);
        res.send(updatedBand);
    });

router
    .route("/album/:albumId")
    .get(async (req, res) => {
        const album = await albumFunctions.get(req.params.albumId);
        res.send(album);
    })
    .delete(async (req, res) => {
        const album = await albumFunctions.remove(req.params.albumId);
        res.send({ albumId: req.params.albumId, deleted: true });
    });

export default router;
