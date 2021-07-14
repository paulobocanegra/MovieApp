import axios from 'axios'

export const fetchReviews = () => (
    axios.get(`/api/reviews`)
);

export const fetchReview = (reviewId) => (
    axios.get(`/api/reviews/${reviewId}`)
);

export const fetchMovieReviews = (movieId) => (
    axios.get(`/api/movies/${movieId}`)
);

export const createReview = (review) => (
    axios.post(`/api/reviews/new`, review)
);

export const deleteReview = (movieId, reviewId) => {
    axios.delete(`/api/movies/${movieId}/${reviewId}`)
}