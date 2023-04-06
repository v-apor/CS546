//Import express and express router as shown in lecture code and worked in previous labs
//You can make your axios calls to the API directly in the routes

import { Router } from "express";
import axios from "axios";
const router = Router();

router.route("/").get(async (req, res) => {
    res.render("homepage");
});

router.route("/searchvenues").post(async (req, res) => {
    const url = `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${req.body.searchVenueTerm}&apikey=JsrX5LuYMMOMbdo51ofnq8ud8gHiGygU&countryCode=US`;
    const { data } = await axios.get(url);
    if (!data._embedded) {
        res.render("venueNotFound", { searchTerm: req.body.searchVenueTerm });
        return;
    }

    var listOfVenues = [];
    let count = 0;
    for (let i = 0; i < data._embedded.venues.length; i++) {
        if (count >= 10) break;
        listOfVenues.push({
            name: data._embedded.venues[i].name,
            id: data._embedded.venues[i].id,
        });
        count += 1;
    }

    res.render("venueSearchResults", {
        venue: listOfVenues,
        searchTerm: req.body.searchVenueTerm,
    });
});

router.route("/venuedetails/:id").get(async (req, res) => {
    const url = `https://app.ticketmaster.com/discovery/v2/venues/${req.params.id}.json?apikey=JsrX5LuYMMOMbdo51ofnq8ud8gHiGygU&countryCode=US`;
    const { data } = await axios.get(url);
    // console.log(data);
    if (!data.images)
        data.images = { url: "/public/images/No_Image_Available.jpg" };
    else data.images = data.images[0];
    // console.log(data.images);
    res.render("venueById", data);
});

export default router;
