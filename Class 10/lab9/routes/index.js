//Here you will require route files and export them as used in previous labs.

import analyzerRoutes from "./textanalyzer.js";

const constructorMethod = (app) => {
    app.use("/", analyzerRoutes);
    app.use("*", (req, res) => {
        res.status(404).render("error", {
            title: "Incorrect URL",
            error: "You've arrived at incorrect URL, please re-check",
        });
    });
};

export default constructorMethod;
