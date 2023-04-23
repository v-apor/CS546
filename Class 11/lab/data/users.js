//import mongo collections, bcrypt and implement the following data functions
import { users } from "../config/mongoCollections.js";
import bcrypt from "bcrypt";
const saltRounds = 8;

export const createUser = async (
    firstName,
    lastName,
    emailAddress,
    password,
    role
) => {
    try {
        if (!firstName || typeof firstName !== "string") {
            throw new Error(
                "First name must be provided as a non-empty string."
            );
        }
        if (!/^[A-Za-z]+$/.test(firstName)) {
            throw new Error("First name must contain only alphabets.");
        }
        if (firstName.length < 2 || firstName.length > 25) {
            throw new Error(
                "First name must be at least 2 characters and at most 25 characters long."
            );
        }

        if (!lastName || typeof lastName !== "string") {
            throw new Error(
                "Last name must be provided as a non-empty string."
            );
        }
        if (!/^[A-Za-z]+$/.test(lastName)) {
            throw new Error("Last name must contain only alphabets.");
        }
        if (lastName.length < 2 || lastName.length > 25) {
            throw new Error(
                "Last name must be at least 2 characters and at most 25 characters long."
            );
        }

        if (!emailAddress || typeof emailAddress !== "string") {
            throw new Error(
                "Email address must be provided as a non-empty string."
            );
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
            throw new Error("Invalid email address format.");
        }

        emailAddress = emailAddress.toLowerCase();
        const userCollection = await users();
        const existingUser = await userCollection.findOne({
            emailAddress: emailAddress,
        });
        if (existingUser) {
            throw new Error("A user with this email address already exists.");
        }

        if (!password || typeof password !== "string") {
            throw new Error("Password must be provided as a non-empty string.");
        }
        if (password.length < 8) {
            throw new Error("Password must be at least 8 characters long.");
        }
        if (!/[A-Z]/.test(password)) {
            throw new Error(
                "Password must contain at least one uppercase character."
            );
        }
        if (!/[0-9]/.test(password)) {
            throw new Error("Password must contain at least one number.");
        }
        if (!/[\W_]/.test(password)) {
            throw new Error(
                "Password must contain at least one special character."
            );
        }

        if (role !== "admin" && role !== "user") {
            throw new Error("Role must be either 'admin' or 'user'.");
        }
        role = role.toLowerCase();

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        let newUser = {
            firstName,
            lastName,
            emailAddress,
            password: hashedPassword,
            role,
        };

        const insertInfo = await userCollection.insertOne(newUser);
        if (insertInfo.insertedCount === 0)
            throw new Error("Could not add user");

        return { insertedUser: true };
    } catch (e) {
        throw e;
    }
};

export const checkUser = async (emailAddress, password) => {
    if (!emailAddress || !password) {
        throw "Both emailAddress and password must be supplied";
    }

    if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailAddress)
    ) {
        throw "Invalid email address format";
    }

    emailAddress = emailAddress.toLowerCase();

    if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(
            password
        )
    ) {
        throw "Invalid password format";
    }

    const userCollection = await users();
    const user = await userCollection.findOne({ emailAddress });

    if (!user) {
        throw "Either the email address or password is invalid";
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user.emailAddress,
            role: user.role.toLowerCase(),
        };
    } else {
        throw "Either the email address or password is invalid";
    }
};
