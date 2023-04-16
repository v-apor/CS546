//Here you will require route files and export them as used in previous labs.
import textAnalyzerRoutes from "./textanalyzer.js";

const constructorMethod = (app) => {
    app.use("/", textAnalyzerRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

export default constructorMethod;
