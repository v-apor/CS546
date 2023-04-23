// import { createUser, checkUser } from "./data/users.js";
import express from "express";
const app = express();
app.use(express.json());
import exphbs from "express-handlebars";
import session from "express-session";

app.use(
    session({
        name: "AuthCookie",
        secret: "This is a secret.. shhh don't tell anyone! But I commited it in my GitHub!!!",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000,
        },
    })
);

import configRoutes from "./routes/index.js";

import { dbConnection } from "./config/mongoConnection.js";

const db = await dbConnection();
// await createUser(
//     "Apoorv",
//     "Chandrakar",
//     "achand14@stevens.edu",
//     "pAssword1@",
//     "user"
// );

// var passwordMatch = await checkUser("achand14@stevens.edu", "pAssword1@");
// console.log(passwordMatch);

app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

configRoutes(app);
app.listen(3000, () => {
    console.log("Live on http://localhost:3000");
});
