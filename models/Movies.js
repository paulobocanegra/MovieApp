const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: {
        type: Object,
        required: false
    },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

module.exports = Movie = mongoose.model("Movie", MovieSchema);