const mongoose = require('mongoose');
require("dotenv").config()

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

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

async function queryAndDisplaySearchResults() {
  try {
    const results = await User.find({name : 'Ayush Jiw', email: "ayush9990@gmail.com"});
    console.log('search records:', results);
    console.log(results.length)
    if (results.length > 0){
    console.log(results[0]._id.toString());
    }
    else{
      console.log('no results found');
    }

    // Do something with the results, such as display them in a web page or API response
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await mongoose.connection.close();
  }
}

//queryAndDisplayResults();
queryAndDisplaySearchResults();

// const user = new User({ 
//     name: 'Ayush Jiw',
//     email: 'ayush9990@gmail.com',
//     password: '123456' 
//     });
// user.save().then(() => {console.log('meow');
//mongoose.connection.close();

