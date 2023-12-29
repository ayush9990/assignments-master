require("dotenv").config()
const jwt = require("jsonwebtoken")
const {User} = require("../db/index")


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    let token = req.headers.authorization.split(" ")[1]
    let userPayload = jwt.verify(token, process.env.JWT_PASS, async (err, payload) => {
      if(err)
      {
         console.log("you are not authenticated: ",err);
         res.send("You are not authorised");
         return
      }
      
      let response = await User.findOne({username: payload.username, password: payload.password})
      console.log(payload);
      req.headers.userId = response.id
      next()
    }
    )

}

module.exports = userMiddleware;