import { connect } from "react-redux";
import { fetchMovie } from "../../actions/movie_actions"
import { logout } from '../../actions/session_actions'
import MovieShow from "./movie_show";

const mapStateToProps = (state, ownProps) => {
    let locationArr = window.location.hash.split("/")
    let movieId = locationArr[locationArr.length - 1]
    console.log(ownProps.match.params.movie_id)
    return {
        currentUser: state.session.user,
        movieId: movieId,
        // reviews: state.entities.movies[movieId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);
