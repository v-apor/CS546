/*
You can choose to define all your middleware functions here, 
export them and then import them into your app.js and attach them that that.
add.use(myMiddleWare()). you can also just define them in the app.js if you like as seen in lecture 10's lecture code example. If you choose to write them in the app.js, you do not have to use this file. 
*/

function rootMiddleware(req, res, next) {
    if (req.session && req.session.user) {
        if (req.session.user.role === "admin") {
            return res.redirect("/admin");
        } else if (req.session.user.role === "user") {
            return res.redirect("/protected");
        }
    }
    res.redirect("/login");
}

function loginMiddleware(req, res, next) {
    if (req.session && req.session.user) {
        if (req.session.user.role === "admin") {
            return res.redirect("/admin");
        } else if (req.session.user.role === "user") {
            return res.redirect("/protected");
        }
    }
    // Allow unauthenticated users to access the login page
    next();
}

function registerMiddleware(req, res, next) {
    if (req.session && req.session.user) {
        if (req.session.user.role === "admin") {
            return res.redirect("/admin");
        } else if (req.session.user.role === "user") {
            return res.redirect("/protected");
        }
    }
    // Allow unauthenticated users to access the register page
    next();
}

function protectedMiddleware(req, res, next) {
    if (!req.session || !req.session.user) {
        return res.redirect("/login");
    }
    // Allow authenticated users with any role to access the protected page
    next();
}

function adminMiddleware(req, res, next) {
    if (!req.session || !req.session.user) {
        return res.redirect("/login");
    } else if (req.session.user.role !== "admin") {
        return res.status(403).render("error", {
            message: "You do not have permission to view this page",
        });
    }
    // Allow authenticated admin users to access the admin page
    next();
}

function logoutMiddleware(req, res, next) {
    if (!req.session || !req.session.user) {
        return res.redirect("/login");
    }
    next();
}

function loggingMiddleware(req, res, next) {
    console.log(
        `[${new Date().toUTCString()}] ${req.method} ${req.originalUrl} (${
            !!req.session && !!req.session.user
                ? "Authenticated User"
                : "Non-Authenticated User"
        })`
    );
    next();
}

export {
    rootMiddleware,
    loginMiddleware,
    registerMiddleware,
    protectedMiddleware,
    adminMiddleware,
    logoutMiddleware,
    loggingMiddleware,
};
