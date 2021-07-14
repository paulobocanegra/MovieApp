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


//Post Review
router.post('/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateMovieInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        // const movie = Movie.findById(req.params.movie_id)

        const newReview = new Review({
            title: req.body.title,
            name: req.body.name,
            rating: req.body.rating,
            body: req.body.body,
            user: req.user.id,
            movie: req.params.movie_id
        });

        console.log(newReview)

        newReview.save().then((review) => res.json(review));

        // movie.reviews.push(newReview)
    }
);

module.exports = router;