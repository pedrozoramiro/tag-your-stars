import { createAction, handleActions } from 'redux-actions';


/* Actions Types */
const GET_ALL_REPOSITORY_REQUEST = 'tag-you-stars/repository/GET_ALL_REPOSITORY_REQUEST';
const GET_ALL_REPOSITORY_SUCCESS = 'tag-you-stars/repository/GET_ALL_REPOSITORY_SUCCESS';


export const types = {
    GET_ALL_REPOSITORY_REQUEST: GET_ALL_REPOSITORY_REQUEST,
    GET_ALL_REPOSITORY_SUCCESS: GET_ALL_REPOSITORY_SUCCESS
};

/* Actions */
const getAllRepositories = createAction(GET_ALL_REPOSITORY_REQUEST);
const storageRepositories = createAction(GET_ALL_REPOSITORY_SUCCESS);

export const actions = {
    getAllRepositories,
    storageRepositories,
};

/* State */
const initialState = [];

/* Reducers */
export default handleActions({
    [GET_ALL_REPOSITORY_SUCCESS]: (state, action) => ([
        ...action.payload.repositories
    ]),
}, initialState);

/* Selectors */
const getRepositories = state => state.repositories;

export const selectors = {
    getRepositories
};