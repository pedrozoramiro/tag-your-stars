import { createAction, handleActions } from 'redux-actions';


/* Actions Types */
const GET_ALL_PROJECT_REQUEST = 'tag-you-stars/project/GET_ALL_PROJECT_REQUEST';
const GET_ALL_PROJECT_SUCCESS = 'tag-you-stars/project/GET_ALL_PROJECT_SUCCESS';

const GET_PROJECT_BY_ID = 'tag-you-stars/project/GET_PROJECT_BY_ID';




export const types = {
    GET_ALL_PROJECT_REQUEST: GET_ALL_PROJECT_REQUEST,
    GET_ALL_PROJECT_SUCCESS: GET_ALL_PROJECT_SUCCESS
};

/* Actions */
const getAllProjects = createAction(GET_ALL_PROJECT_REQUEST);
const storageProjects = createAction(GET_ALL_PROJECT_SUCCESS);

export const actions = {
    getAllProjects,
    storageProjects,
};

/* State */
const initialState = { projects: []};

/* Reducers */
export default handleActions({
    [GET_ALL_PROJECT_SUCCESS]: (state, action) => ({
        ...state, projects: action.payload
        }),
}, initialState);

/* Selectors */
const getProjects = state => state.projectsReducer.projects;
const getProjectById = (state,projectId) => state.projectsReducer.projects.find(p => p.id === projectId);

export const selectors = {
    getProjects,
    getProjectById
};