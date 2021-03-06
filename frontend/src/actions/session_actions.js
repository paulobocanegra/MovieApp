import * as SessionAPIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

export const receiveUserSignIn = (user) => ({
    type: RECEIVE_USER_SIGN_IN,
    user
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT,
});

export const register = (user) => (dispatch) => {
    
    return SessionAPIUtil.register(user).then(
        (user) => dispatch(receiveUserSignIn(user)),
        (err) => {
            console.log(err)
            dispatch(receiveErrors(err.response.data))
        }
    );

}

export const login = (user) => (dispatch) =>
    SessionAPIUtil.login(user)
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            SessionAPIUtil.setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded));
        })


export const logout = () => (dispatch) => {
        localStorage.removeItem("jwtToken");
        SessionAPIUtil.setAuthToken(false);
        dispatch(logoutUser());
};

