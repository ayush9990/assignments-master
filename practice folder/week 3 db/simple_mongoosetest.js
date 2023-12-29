const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ayush9990:ul5kNZ1iCNDbgyeo@cluster0.cuceysl.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String , email: String, password: String});

async function queryAndDisplayResults() {
  try {
    const results = await User.find({});
    console.log('All records:', results);
    console.log(results.length)
    console.log(results[0]._id.toString());

    // Do something with the results, such as display them in a web page or API response
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await mongoose.connection.close();
  }
}

queryAndDisplayResults();

// const user = new User({ 
//     name: 'Ayush Jiw',
//     email: 'ayush9990@gmail.com',
//     password: '123456' 
//     });
// user.save().then(() => {console.log('meow');
//mongoose.connection.close();

