const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db/index.js");
const jwt = require("jsonwebtoken")


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    let user = {
        username: req.body.username,
        password: req.body.password,
      };
      await User.create(user);
      res.status(200).json({ msg: "User created successfully" });
});

router.post('/signin', async (req, res) => {
    // Implement user signup logic
    let user = {
        username: req.body.username,
        password: req.body.password,
      };
      let response = await User.findOne(user);
      if (response) {
        let userToken = jwt.sign(user, process.env.JWT_PASS);
        res
          .set({ "Authorization": `Bearer ${userToken}` })
          .status(200)
          .json({ msg: "User authenticated successfully" });
      }else{
        res.status(401).json({msg: "register first"})
      }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    let courses = await Course.find({})
  res.status(200).json({courses: courses})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    
    // console.log("id ", req);
    let response = await User.findOneAndUpdate(
        { _id: req.headers.userId },
        { $push: { purchases: req.params.courseId } }
      );
      console.log(response);
    
      res.status(200).json({ message: "Course purchased successfully" });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let user = await User.findOne({_id: req.headers.userId}).populate("purchases")
    console.log(user);
    res.status(200).json({courses: user.purchases})
});
module.exports = router