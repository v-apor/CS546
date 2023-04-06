//Here you will import route files and export them as used in previous labs
import venueRoutes from "./venues.js";
import path from "path";

const constructorMethod = (app) => {
    app.use("/", venueRoutes);

    app.use("*", (req, res) => {
        res.status(404).render("error", {title: "Incorrect URL", error: "You've arrived at incorrect URL, please re-check"});
    });
};

export default constructorMethod;
