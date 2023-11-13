const mongoose = require('mongoose');

module.exports.connectDB = () => {
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log('connected to database successfully...');
  });
}
