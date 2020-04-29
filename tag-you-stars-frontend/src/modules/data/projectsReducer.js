import { createAction, handleActions } from 'redux-actions';


/* Actions Types */
const GET_ALL_PROJECT_REQUEST = 'tag-you-stars/project/GET_ALL_PROJECT_REQUEST';
const GET_ALL_PROJECT_SUCCESS = 'tag-you-stars/project/GET_ALL_PROJECT_SUCCESS';
const ADD_TAG_REQUEST = 'tag-you-stars/project/ADD_TAG_REQUEST';
const ADD_TAG_SUCCESS = 'tag-you-stars/project/ADD_TAG_SUCCESS';
const DELETE_TAG_REQUEST = 'tag-you-stars/project/DELETE_TAG_REQUEST';
const DELETE_TAG_SUCCESS = 'tag-you-stars/project/DELETE_TAG_SUCCESS';


export const types = {
    GET_ALL_PROJECT_REQUEST: GET_ALL_PROJECT_REQUEST,
    GET_ALL_PROJECT_SUCCESS: GET_ALL_PROJECT_SUCCESS,
    ADD_TAG_REQUEST: ADD_TAG_REQUEST,
    ADD_TAG_SUCCESS: ADD_TAG_SUCCESS,
    DELETE_TAG_REQUEST:DELETE_TAG_REQUEST,
    DELETE_TAG_SUCCESS:DELETE_TAG_SUCCESS

};

/* Actions */
const getAllProjects = createAction(GET_ALL_PROJECT_REQUEST);
const storageProjects = createAction(GET_ALL_PROJECT_SUCCESS);

const postNewTag = createAction(ADD_TAG_REQUEST);
const storageNewTag = createAction(ADD_TAG_SUCCESS);

const deleteTag = createAction(DELETE_TAG_REQUEST);
const storageDeleteTag = createAction(DELETE_TAG_SUCCESS);



export const actions = {
    getAllProjects,
    postNewTag,
    storageProjects,
    storageNewTag,
    deleteTag,
    storageDeleteTag
};

/* State */
const initialState = [];

/* Reducers */
export default handleActions({
    [GET_ALL_PROJECT_SUCCESS]: (state, action) => ( 
        action.payload
    ),
    [ADD_TAG_SUCCESS]: (state, action) => {
        return updateItemInArray(state, action.payload.projectId, (project) => {
            var tags = project.tags ?? [];
            tags.push(action.payload.tag);
            return { ...project, tags };
        })
    },
    [DELETE_TAG_SUCCESS]: (state, action)=> {
        return updateItemInArray(state, action.payload.projectId, (project) => {
            var tags = project.tags ?? [];
            const index = tags.indexOf(action.payload.tag);
            if (index > -1) {
                tags.splice(index, 1);
            }
            return { ...project, tags };
        })
    },
}, initialState);

/* Selectors */
const getProjects = state => state.projectsReducer;
const getProjectById = (state, projectId) =>{
    return state.projectsReducer.find(p => p.id === projectId);
}

export const selectors = {
    getProjects,
    getProjectById
};


//https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
export function updateItemInArray(array, itemId, updateItemCallback) {
    let retorno = array.map(item => {
        if (item.id !== itemId) {
            // Since we only want to update one item, preserve all others as they are now
            return item;
        }
        // Use the provided callback to create an updated item
        return updateItemCallback(item);
    });

    return retorno;
}