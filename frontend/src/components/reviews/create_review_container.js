import { connect } from "react-redux";
import { composeReview } from "../../actions/review_actions";

import CreateReview from "./create_review";

const mapStateToProps = (state) => {
  // console.log(state.entities.movies._id)
  let locationArr = window.location.hash.split("/")
  let movieId = locationArr[locationArr.length - 2]
  return {
    currentUser: state.session.user,
    errors: state.session.errors,
    movieId: movieId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    composeReview: (review) => dispatch(composeReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);