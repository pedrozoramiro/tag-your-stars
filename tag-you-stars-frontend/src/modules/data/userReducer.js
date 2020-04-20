import { createAction, handleActions } from 'redux-actions';


/* Actions Types */
const GET_USER_REQUEST = 'tag-you-stars/user/GET_USER_REQUEST';
const GET_USER_SUCCESS = 'tag-you-stars/user/GET_USER_SUCCESS';


export const types = {
    GET_USER_REQUEST: GET_USER_REQUEST,
    GET_USER_SUCCESS: GET_USER_SUCCESS
};

/* Actions */
const getUserLogged = createAction(GET_USER_REQUEST);
const storageUserLogged = createAction(GET_USER_SUCCESS);

export const actions = {
    getUserLogged,
    storageUserLogged,
};

/* State */
const initialState = {};

/* Reducers */
export default handleActions({
    [GET_USER_SUCCESS]: (state, action) =>
    ( {...state, user : action.payload}),
}, initialState);

/* Selectors */
const getUser = state => state.userReducer.user;

export const selectors = {
    getUser
};