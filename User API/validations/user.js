const { checkSchema } = require("express-validator");

const createUser = {
  firstName: {
    notEmpty: {
      errorMessage: "`First Name` is required.",
    },
  },
  lastName: {
    notEmpty: {
      errorMessage: "`Last Name` is required.",
    },
  },
  email: {
    notEmpty: {
      errorMessage: "`Email` is required.",
    },
    isEmail: {
      errorMessage: "`Email` is invalid.",
    }
  },
};

module.exports.createUserValidation = () => {
  return checkSchema(createUser);
};