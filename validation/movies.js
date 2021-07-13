const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMovieInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';

    if (!Validator.isLength(data.title, { min: 4, max: 140 })) {
        errors.title = 'Title must be between 4 and 140 characters';
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (!Validator.isFloat(data.rating, { min: 1, max: 5 })) {
        errors.rating = 'Rating must be between 1 and 5';
    }

    if (Validator.isEmpty(data.reviews)) {
        errors.reviews = 'Review field is required';
    }
    

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};