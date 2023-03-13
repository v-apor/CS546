// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

import { Router } from "express";

const router = Router();

router
    .route("/:bandId")
    .get(async (req, res) => {
        res.send("Reached albums/:bandId");
    })
    .post(async (req, res) => {
        //code here for POST
    });

router
    .route("/album/:albumId")
    .get(async (req, res) => {
        res.send("Reached albums/album/:albumId");
    })
    .delete(async (req, res) => {
        //code here for DELETE
    });

export default router;
