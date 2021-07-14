import { connect } from "react-redux";
import { fetchMovies, fetchMovie, removeMovie} from "../../actions/movie_actions";
import MoviesIndex from "./movies_index";

const mapStateToProps = (state) => {
    return {
        movies: Object.values(state.entities.movies),
        errors: state.errors.session,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: (movie) => dispatch(fetchMovie(movie)),
        removeMovie: (movieId) => dispatch(removeMovie(movieId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
