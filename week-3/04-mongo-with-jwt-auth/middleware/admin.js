require("dotenv").config()
const jwt = require("jsonwebtoken")
const { Admin, User, Course } = require("../db/index.js");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization.split(" ")[1]
    console.log("token is: ",req.headers.authorization);
    let adminPayload = jwt.verify(token, process.env.JWT_PASS, async (err, payload) => 
        {
        if(err) {
            console.log("you are not authenticated: ",err);
            res.send("You are not authorised");
            return
        }
        console.log(payload);
        let admin = await Admin.findOne({username: payload.username, password: payload.password})
        req.adminId = admin.id
        next()
        }
    )
}

module.exports = adminMiddleware;