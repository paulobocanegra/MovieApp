const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Movie = require('../../models/Movies');
const validateMovieInput = require('../../validation/movies');


//Fetch Video
router.get('/', (req, res) => {
    Movie.find()
        .sort({ date: -1 })
        .then(movies => res.json(movies))
        .catch(err => res.status(404).json({ nomoviesfound: 'No movies found' }));
});

router.get('/user/:user_id', (req, res) => {
    Movie.find({ user: req.params.user_id })
        .then(movies => res.json(movies))
        .catch(err =>
            res.status(404).json({ nomoviesfound: 'No movies found with specified user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.json(movie))
        .catch(err =>
            res.status(404).json({ nomoviefound: 'No movie found with that ID' })
        );
});


//Post Video
router.post('/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateMovieInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newMovie = new Movie({
            title: req.body.title,
            rating: req.body.rating,
            reviews: req.body.reviews,
            user: req.body.user_id
        });
//TEST ASSIGNMENT OF REVIEW INSIDE OF POJO REVIEWS


        newMovie.save().then(movie => res.json(movie));
    }
);

module.exports = router;