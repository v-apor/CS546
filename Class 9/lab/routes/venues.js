//Import express and express router as shown in lecture code and worked in previous labs
//You can make your axios calls to the API directly in the routes

import { Router } from "express";
import axios from "axios";
const router = Router();

router.route("/").get(async (req, res) => {
    res.render("homepage", { title: "Venue Finder" });
});

router.route("/searchvenues").post(async (req, res) => {
    if(!req.body.searchVenueTerm || req.body.searchVenueTerm.trim().length == 0) res.status(400).render("error", {error: "You must enter a non-empty text in the search bar.", title: "Error, No input text"})
    req.body.searchVenueTerm = req.body.searchVenueTerm.trim()
    const url = `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${req.body.searchVenueTerm}&apikey=JsrX5LuYMMOMbdo51ofnq8ud8gHiGygU&countryCode=US`;
    const { data } = await axios.get(url);
    if (!data._embedded) {
        res.render("venueNotFound", { searchTerm: req.body.searchVenueTerm, title: "No venues found"});
        return
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
        title: "Venues Found",
    });
});

router.route("/venuedetails/:id").get(async (req, res) => {
    const url = `https://app.ticketmaster.com/discovery/v2/venues/${req.params.id}.json?apikey=JsrX5LuYMMOMbdo51ofnq8ud8gHiGygU&countryCode=US`;
    var data = "Temporary Flag"
    var response = await axios.get(url).catch(function (error) {
        data = undefined
      });
    if(!data) {
        res.status(404).render("error", {error: "A venue with that ID does not exist.", title: "Error, API call failed"})
        return;
}
    data = response.data

    if (!data.images || data.images.length == 0)
        data.images = { url: "/public/images/No_Image_Available.jpg" };
    else data.images = data.images[0];

    // const defaultImageUrl = "/public/images/No_Image_Available.jpg";

    // if (!data.images.url) {
    //     data.images.url = defaultImageUrl;
    // } else data.images = data.images[0];

    if (!data.address || !data.address.line1) data.address = { line1: "N/A" };

    if (!data.city || !data.city.name) data.city = { name: "N/A" };

    if (!data.state || !data.state.stateCode) data.state = { stateCode: "N/A" };

    if (!data.postalCode) data.postalCode = "N/A";

    if (!data.boxOfficeInfo || !data.boxOfficeInfo.phoneNumberDetail)
        data.boxOfficeInfo = { phoneNumberDetail: "N/A" };

    data["title"] = "Venue Details";
    res.render("venueById", data);
});

export default router;
