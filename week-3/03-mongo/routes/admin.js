const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db/index.js");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let admin = {
        username: req.body.username,
        password: req.body.password,
      };
    
    const results = await Admin.find({username : admin.username, password: admin.password});
    console.log(results);
    if (results.length > 0 ){
        res.status(401).send('User already exists with following credentials');

    }else{
        await Admin.create(admin);
        res.status(200).json({ msg: "Admin created successfully" });
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    //res.send("reached route handler");
    let newCourse = {
        title : req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink,
        author : req.userId
    }

    try 
    {
        let courseCreated = await Course.create(newCourse);

        console.log(req.userId);
        console.log(newCourse);
        res.json({
            message: 'Course created successfully', 
            courseId: courseCreated._id 
        })
    }
    catch(err){
        console.error('Error fetching courses:', err);
        res.send(err)
    }

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try 
    {
        let allCourses = await Course.find({}).populate('author','username');

        console.log(allCourses);
        res.json({courses : allCourses
        })
    }
    catch(err){
        console.error('Error fetching courses:', err);
        res.send(err)
    }
});

module.exports = router;