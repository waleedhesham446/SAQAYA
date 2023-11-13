const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  marketingConsent: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports.UserModel = mongoose.model('User', UserSchema);