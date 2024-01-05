const {Admin} = require("../db/index.js");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let admin = {
        username : req.headers.username, 
        password : req.headers.password 
    }

    let foundUser = await Admin.findOne({
        username : admin.username,
        password : admin.password
    });

    if (foundUser){
        //set adminid for using later
        console.log(foundUser);
        req.userId = foundUser._id ; 
        next();
    }
    else{
        res.status(403).json({
            msg: "User does not exist"
        })
    }


}

module.exports = adminMiddleware;