const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { Admin, User, Course } = require("../db/index.js");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let admin = {
      username: req.body.username,
      password: req.body.password,
    };
    await Admin.create(admin);
    res.status(200).json({ msg: "Admin created successfully" });
  });

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    let admin = {
      username: req.body.username,
      password: req.body.password,
    };
    let response = await Admin.findOne(admin);
    if (response) {
      let adminToken = jwt.sign(admin, process.env.JWT_PASS);
      res
        .set({ "Authorization": `Bearer ${adminToken}` })
        .status(200)
        .json({ msg: "Admin authenticated successfully" });
    }else{
      res.status(401).json({msg: "register first"})
    }
  });

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
    let course = {
      title: req.body.title,
      description: req.body.description,
      price: parseInt(req.body.price),
      imageLink: req.body.imageLink,
      published: req.body.published==="false" ? false : true,
      author: req.adminId
    }
  
    let response =  await Course.create(course)
  
    let courseId = response.id 
    
    res.status(200).json({ message: 'Course created successfully', courseId: courseId })
  });
  
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    let token = req.headers.Authorization
    console.log(token);
    let courses = await Course.find({author: req.adminId})
    res.status(200).json({courses: courses})
  });

module.exports = router;