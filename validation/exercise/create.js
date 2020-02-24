const Validator = require("validator");
const validText = require("../valid-text");

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.category = (validText(data.category)) ? data.category.trim() : "";
    data.name = (validText(data.name)) ? data.name.trim() : "";
    data.description = (validText(data.description)) ? data.description.trim() : "";
    data.reps = (validText(data.reps)) ? data.reps.trim() : "";
    data.seconds = (validText(data.seconds)) ? data.seconds.trim() : "";


    if (Validator.isEmpty(data.category)){
        errors.category = "Please select a category";
    }

    if (Validator.isEmpty(data.name)){
        errors.name = "Please provide a name";
    }
    
    if (Validator.isEmpty(data.description)){
        errors.description = "Please provide a description";
    }

    if (Validator.isEmpty(data.reps) && Validator.isEmpty(data.seconds)){
        errors.reps_seconds = "Please provide reps or seconds";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
