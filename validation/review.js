const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';

    if (!Validator.isLength(data.name, { min: 4, max: 140 })) {
        errors.name = 'Name must be between 4 and 140 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Title field is required';
    }

    if (Validator.isFloat(data.rating, { min: 1, max: 5 })) {
        errors.rating = 'Rating must be between 1 and 5';
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = 'Review field is required';
    }

    if (!Validator.isLength(data.body, { min: 4, max: 240 })) {
        errors.body = 'Body must be between 4 and 240 characters';
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};