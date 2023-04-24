//Here you will import route files and export the constructor method as shown in lecture code and worked in previous labs.
import authRoutes from "./auth_routes.js";
import { loggingMiddleware } from "../middleware.js";

const constructorMethod = (app) => {
    app.use("/", loggingMiddleware, authRoutes);
    app.use("*", (req, res) => {
        res.status(404).render("error", {
            title: "Incorrect URL",
            message: "You've arrived at incorrect URL, please re-check",
        });
    });
};

export default constructorMethod;
