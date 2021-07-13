const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    movie: { type: mongoose.Schema.ObjectId, ref: 'Movie' }
}, {
    timestamps: true
})

module.exports = Review = mongoose.model("Movie", ReviewSchema);