const Validator = require('validator');
const validText = require("../valid-text");

module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.email = (validText(data.email)) ? data.email.trim() : '';
    data.username = (validText(data.username)) ? data.username.trim() : '';
    data.password = (validText(data.password)) ? data.password.trim() : '';
    data.password2 = (validText(data.password)) ? data.password2.trim() : '';

    if (!Validator.isEmail(data.email)){
        errors.email = "Not a valid email";
    }

    if (Validator.isEmpty(data.email)){
        errors.email = "Email is required";
    }

    if (Validator.isEmpty(data.username)){
        errors.username = "Username is required";
    }

    if (!Validator.isLength(data.password, {min: 6})){
        errors.password = "Password has to be 6 or more characters";
    }
    
    if (Validator.isEmpty(data.password)){
        errors.password = "Password is required";
    }
    if (Validator.isEmpty(data.password2)){
        errors.password = "Confirm Password is required";
    }

    if (!Validator.equals(data.password, data.password2)){
        errors.password = "Passwords must match";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}