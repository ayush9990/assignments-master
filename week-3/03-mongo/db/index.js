const mongoose = require('mongoose');

console.log("here");

// Connect to MongoDB
mongoose.connect('mongodb+srv://ayush9990:ul5kNZ1iCNDbgyeo@cluster0.cuceysl.mongodb.net/week3mongo');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}