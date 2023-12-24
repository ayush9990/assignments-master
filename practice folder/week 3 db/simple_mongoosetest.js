const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ayush9990:ul5kNZ1iCNDbgyeo@cluster0.cuceysl.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String , email: String, password: String});


const existing_user = User.findOne({name : "Ayush Jiw"}).exec();
console.log(existing_user);

// const user = new User({ 
//     name: 'Ayush Jiw',
//     email: 'ayush9990@gmail.com',
//     password: '123456' 
//     });
// user.save().then(() => {console.log('meow');
//mongoose.connection.close();

