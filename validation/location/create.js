const Validator = require("validator");
const validText = require("../valid-text");

module.exports = function validateLoginInput(data) {
    let errors = {};
    
    // data.text = (validText(data.text)) ? data.text.trim() : "";

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
