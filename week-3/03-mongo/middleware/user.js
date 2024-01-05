const {User} = require("../db/index.js");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let newUser = {
        username : req.headers.username, 
        password : req.headers.password 
    }

    let foundUser = await User.findOne({
        username : newUser.username,
        password : newUser.password
    });

    if (foundUser){
        next();
    }
    else{
        res.status(403).json({
            msg: "User does not exist"
        })
    }
}

module.exports = userMiddleware;