import { connect } from "react-redux";
import { composeMovie } from "../../actions/movie_actions";
import RegisterForm from "./register_form";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        errors: state.session.errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        composeMovie: (movie) => dispatch(composeMovie(movie))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
