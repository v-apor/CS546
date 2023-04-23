/*
You can choose to define all your middleware functions here, 
export them and then import them into your app.js and attach them that that.
add.use(myMiddleWare()). you can also just define them in the app.js if you like as seen in lecture 10's lecture code example. If you choose to write them in the app.js, you do not have to use this file. 
*/

const myMiddleWare = (req, res, next) => {
    const isAuthenticated = req.session && req.session.user;
    if (!isAuthenticated) {
        return res.redirect("/login");
    }

    // console.log(req.session);
    // set user object on request
    req.user = {
        firstName: req.session.user.firstName,
        role: req.session.user.role,
    };

    next();
};

export default myMiddleWare;
