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
    next();
}

function protectedMiddleware(req, res, next) {
    if (!req.session || !req.session.user) {
        return res.redirect("/login");
    }
    next();
}

function adminMiddleware(req, res, next) {
    if (!req.session || !req.session.user) {
        return res.redirect("/login");
    } else if (req.session.user.role !== "admin") {
        return res.status(403).render("error", {
            title: "Error",
            message: "You do not have permission to view this page",
        });
    }

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
