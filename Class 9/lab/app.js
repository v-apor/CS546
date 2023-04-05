//Here is where you'll set up your server as shown in lecture code
import express from "express";
const app = express();

import configRoutes from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import exphbs from "express-handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const staticDir = express.static(__dirname + "/public");

app.use("/public", staticDir);
app.use(express.json());
// urlencoded to convert it to usable format
app.use(express.urlencoded({ extended: true }));
// this will use main.handlebars for every page by default
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));

// This is to simplify handlebars naming
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(3000, () => {
    console.log("Your routes will be running on http://localhost:3000");
});
