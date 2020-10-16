const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');
mongoose.connect(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err.msg);
    process.exit(1);
    // Exit with Failiure
  }
};

module.exports = connectDB;
