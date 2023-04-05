//Here you will import route files and export them as used in previous labs
import venueRoutes from "./venues.js";
import path from "path";

const constructorMethod = (app) => {
    app.use("/", venueRoutes);

    app.use("*", (req, res) => {
        res.status(404).sendFile(path.resolve("static/badRequest.html"));
    });
};

export default constructorMethod;
