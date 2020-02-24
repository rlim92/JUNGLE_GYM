const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email.trim() : "";
  data.password = validText(data.password) ? data.password.trim() : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Not a valid email";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is empty";
  }

  if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password has to be 6 or more characters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is empty";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
