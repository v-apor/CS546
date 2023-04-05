//Import express and express router as shown in lecture code and worked in previous labs
//You can make your axios calls to the API directly in the routes

import { Router } from "express";
import axios from "axios";
const router = Router();

router.route("/").get(async (req, res) => {
    res.render("homepage");
});

router.route("/searchvenues").post(async (req, res) => {
    const url = `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${req.body.query}&apikey=JsrX5LuYMMOMbdo51ofnq8ud8gHiGygU&countryCode=US`;
    const { data } = await axios.get(url);
    var listOfVenues = [];
    for (let i = 0; i < data._embedded.venues.length; i++) {
        listOfVenues.push({
            name: data._embedded.venues[i].name,
            id: data._embedded.venues[i].id,
        });
    }
    res.render("venueSearchResults", { venue: listOfVenues });
});

router.route("/venuedetails/:id").get(async (req, res) => {
    const url = `https://app.ticketmaster.com/discovery/v2/venues/${req.params.id}.json?apikey=JsrX5LuYMMOMbdo51ofnq8ud8gHiGygU&countryCode=US`;
    const { data } = await axios.get(url);
    data.images = data.images[0];
    console.log(data);
    res.render("venueById", data);
});

export default router;
