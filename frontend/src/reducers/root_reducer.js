import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from './errors_reducer'
import EntitiesReducer from "./entities_reducer";
import moviesReducer from "./movies_reducer";

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    errors,
    session
});

export default RootReducer;
