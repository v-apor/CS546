/*
Here is where you'll set up your server as shown in lecture code and worked in previous labs.
Your server this week should not be doing any of the processing! Your server only exists to allow someone to get to the HTML Page and download the associated assets to run the text analyzer page.
*/

import express from "express";
const app = express();

import configRoutes from "./routes/index.js";
app.use();

configRoutes(app);

app.listen(3000, () => {
    console.log("Your routes will be running on http://localhost:3000");
});
