import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW,
} from '../actions/review_actions'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews.data
        case RECEIVE_REVIEW:
            newState[action.review._id] = action.review
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState;
        default:
            return state;
    }
};

export default moviesReducer;
