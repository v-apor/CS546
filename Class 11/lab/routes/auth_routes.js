import { Router } from "express";
import { createUser, checkUser } from "../data/users.js";
import myMiddleWare from "../middleware.js";

const router = Router();

router.route("/").get(async (req, res) => {
    //code here for GET THIS ROUTE SHOULD NEVER FIRE BECAUSE OF MIDDLEWARE #1 IN SPECS.
    res.send("Authentication Failure");
});

router
    .route("/register")
    .get(async (req, res) => {
        res.render("register", { title: "Register" });
    })
    .post(async (req, res) => {
        const firstName = req.body.firstNameInput.trim();
        const lastName = req.body.lastNameInput.trim();
        const email = req.body.emailAddressInput.trim();
        const password = req.body.passwordInput.trim();
        const confirmPassword = req.body.confirmPasswordInput.trim();
        const role = req.body.roleInput.trim();

        // Error handling for missing fields
        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            !role
        ) {
            const missingFields = [];
            if (!firstName) missingFields.push("First Name");
            if (!lastName) missingFields.push("Last Name");
            if (!email) missingFields.push("Email Address");
            if (!password) missingFields.push("Password");
            if (!confirmPassword) missingFields.push("Confirm Password");
            if (!role) missingFields.push("Role");
            const errorMessage = `Please fill in the following required fields: ${missingFields.join(
                ", "
            )}`;
            res.status(400).render("register", {
                title: "Register",
                errorMessage: errorMessage,
            });
            return;
        }

        // Error handling for first name
        if (
            typeof firstName !== "string" ||
            firstName.length < 2 ||
            firstName.length > 25 ||
            /\d/.test(firstName)
        ) {
            res.status(400).render("register", {
                title: "Register",
                errorMessage: "Please enter a valid first name.",
            });
            return;
        }

        // Error handling for last name
        if (
            typeof lastName !== "string" ||
            lastName.length < 2 ||
            lastName.length > 25 ||
            /\d/.test(lastName)
        ) {
            res.status(400).render("register", {
                title: "Register",
                errorMessage: "Please enter a valid last name.",
            });
            return;
        }

        // Error handling for email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).render("register", {
                title: "Register",
                errorMessage: "Please enter a valid email address.",
            });
            return;
        }

        // Error handling for password
        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (!passwordRegex.test(password)) {
            res.status(400).render("register", {
                title: "Register",
                errorMessage:
                    "Please enter a valid password. Your password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.",
            });
            return;
        }

        // Error handling for confirm password
        if (password !== confirmPassword) {
            res.status(400).render("register", {
                title: "Register",
                errorMessage: "Passwords do not match. Please try again.",
            });
            return;
        }

        // Error handling for role
        if (role !== "admin" && role !== "user") {
            res.status(400).render("register", {
                title: "Register",
                errorMessage: "Please select a valid role.",
            });
            return;
        }

        // Call createUser function
        var result = "";
        try {
            result = await createUser(
                firstName,
                lastName,
                email,
                password,
                role
            );
        } catch (error) {
            res.status(400).render("register", {
                title: "Register",
                errorMessage: error,
            });
        }

        if (result.insertedUser) {
            res.redirect("/login");
        } else {
            res.status(500).render("register", {
                title: "Register",
                errorMessage: "An error occurred. Please try again later.",
            });
        }
    });

router
    .route("/login")
    .get(async (req, res) => {
        res.render("login", { title: "Login" });
    })
    .post(async (req, res) => {
        const { emailAddressInput, passwordInput } = req.body;

        // Check if emailAddressInput and passwordInput are supplied
        if (!emailAddressInput || !passwordInput) {
            return res.status(400).render("login", {
                errorMessage: "Please enter both email address and password.",
            });
        }

        // Check if emailAddressInput is a valid email address format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddressInput)) {
            return res.status(400).render("login", {
                errorMessage: "Please enter a valid email address.",
            });
        }

        // Convert the email to lowercase for case-insensitive matching
        const lowercaseEmail = emailAddressInput.toLowerCase();

        // Check if passwordInput meets the constraints
        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;
        if (!passwordRegex.test(passwordInput)) {
            return res.status(400).render("login", {
                errorMessage:
                    "Please enter a valid password. It should be at least 8 characters long, contain at least one uppercase character, one number, and one special character.",
            });
        }

        // console.log("Passing", lowercaseEmail, passwordInput);
        try {
            // Call checkUser db function passing in the emailAddressInput and passwordInput
            const user = await checkUser(lowercaseEmail, passwordInput);

            // Set the session user property
            req.session.user = {
                firstName: user.firstName,
                lastName: user.lastName,
                emailAddress: user.emailAddress,
                role: user.role,
            };
            // console.log("~~~~~~", req.session.user);

            // Redirect based on the user's role
            if (user.role === "admin") {
                res.redirect("/admin");
            } else {
                res.redirect("/protected");
            }
        } catch (error) {
            // Render the login screen again with an error message if the user's login is invalid
            return res.status(400).render("login", {
                errorMessage:
                    "Invalid email address and/or password. Please try again.",
            });
        }
    });

router.route("/protected").get(myMiddleWare, async (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    const { firstName, role } = req.user;

    // console.log(firstName, currentTime, role);
    // Render Handlebars template with user data
    res.render("protected", {
        title: "Protected Page",
        firstName: firstName,
        currentTime: currentTime,
        role: role,
        isAdmin: role === "admin",
    });
});

router.route("/admin").get(async (req, res) => {
    res.send("Reached Admin");
});

router.route("/error").get(async (req, res) => {
    //code here for GET
});

router.route("/logout").get(async (req, res) => {
    //code here for GET
});

export default router;
