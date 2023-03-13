// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!
import { Router } from "express";
const router = Router();

router
    .route("/")
    .get(async (req, res) => {
        res.send("reached bands/");
    })
    .post(async (req, res) => {
        //code here for POST
    });

router
    .route("/:id")
    .get(async (req, res) => {
        res.send("reached bands/:id");
    })
    .delete(async (req, res) => {
        //code here for DELETE
    })
    .put(async (req, res) => {
        //code here for PUT
    });

export default router;
