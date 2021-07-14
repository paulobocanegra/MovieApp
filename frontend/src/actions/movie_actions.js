import * as util from '../util/movies_util';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES,
    movies
})

export const receiveMovie = (movie) => ({
    type: RECEIVE_MOVIE,
    movie
})

export const deleteMovie = (movieId) => {
    return {
        type: RECEIVE_MOVIE,
        movieId
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
}

export const fetchMovies = () => dispatch => (
    util.fetchMovies()
        .then(movies => dispatch(receiveMovies(movies)))
        .catch(err => console.log(err))
)

export const fetchMovie = (movieId) => dispatch => (
    util.fetchMovie(movieId)
        .then(movie => dispatch(receiveMovie(movie)))
        .catch(err => console.log(err))
)

export const composeMovie = (data) => (dispatch) => {
    return util.createMovie(data)
        .then((result) => dispatch(receiveMovie(result)))
        .catch((err) => console.log(err))
}

export const removeMovie = (movieId) => dispatch => {
    return util.deleteMovie(movieId)
        .then( () => dispatch(deleteMovie(movieId)))
        .catch(err => console.log(err))
}