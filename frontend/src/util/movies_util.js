import axios from 'axios'

export const fetchMovies = () => (
    axios.get(`/api/movies`)
);

export const fetchMovie = (movieId) => (
    axios.get(`/api/movies/${movieId}`)
);

export const createMovie = (movie) => (
    axios.post(`/api/movies/`, movie)
);

export const deleteMovie = (movieId) => {
    axios.delete(`/api/movies/${movieId}`)
}