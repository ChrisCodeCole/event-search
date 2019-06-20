//MongoDB connection
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// get response async, using async await wrapped inside try- catch
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true // put to deal with deprication warning
    });
    console.log('MongoDb conneted...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
