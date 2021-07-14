import {
    RECEIVE_MOVIES,
    RECEIVE_MOVIE,
} from '../actions/movie_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_MOVIES:
            return action.movies.data
        case RECEIVE_MOVIE:
            newState[action.movie.data._id] = action.movie.data
            return newState;
        default:
            return state;
    }
};

export default usersReducer;