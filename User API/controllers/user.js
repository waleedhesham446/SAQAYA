
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { UserModel } = require('../models/User');
const { generateHash } = require('../utils/hash');

module.exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({
      message: 'Invalid empty id'
    });

    const user = await UserModel.findById(id);

    const userObj = user.toObject();
    if (!userObj.marketingConsent) {
      delete userObj.email;
    }
    return res.status(200).json({
      message: 'User fetched successfully',
      user: userObj
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong, please check your query and try again',
      error: error.message
    });
  }
}

module.exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, marketingConsent } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({
      message: 'This email is already existing'
    });

    //  sliced to 24 characters only to fit as a MongoId
    const id = generateHash(email).slice(0, 24);
    
    const user = new UserModel({
      _id: new mongoose.Types.ObjectId(id),
      firstName,
      lastName,
      email,
      marketingConsent
    });

    await user.save();

    const token = jwt.sign({ id }, process.env.JWT_SECRET);
    
    return res.status(200).json({
      message: 'User is created successfully',
      id,
      token
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong, please check your query and try again',
      error: error.message
    });
  }
}