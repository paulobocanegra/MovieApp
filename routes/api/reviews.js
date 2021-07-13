const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Review = require('../../models/Review');
const validateMovieInput = require('../../validation/movies');


//Fetch Reviews
router.get('/', (req, res) => {
    Review.find()
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found' }));
});

router.get('/movie/:movie_id', (req, res) => {
    Review.find({ movie: req.params.movie_id })
        .then(reviews => res.json(reviews))
        .catch(err =>
            res.status(404).json({ noreviewsfound: 'No reviews found with this movie' }
            )
        );
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res.status(404).json({ noreviewfound: 'No review found with that ID' })
        );
});


//Post Video
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateMovieInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newMovie = new Movie({
            name: req.body.name,
            rating: req.body.rating,
            body: req.body.body,
            user: req.user.id,
            movie: req.params.movie_id
        });

        newMovie.save().then(movie => res.json(movie));
    }
);

module.exports = router;