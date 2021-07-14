import { connect } from "react-redux";
import { composeMovie } from "../../actions/movie_actions";
import { logout }  from '../../actions/session_actions'
import MovieForm from "./movie_form";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        errors: state.session.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        composeMovie: (movie) => dispatch(composeMovie(movie)),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);
