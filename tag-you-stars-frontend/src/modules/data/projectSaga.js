import {takeEvery} from 'redux-saga/effects';

import {types as projectTypes, actions as projectActions} from './projectsReducer';

import apiSaga from '../../utils/apiSaga';
import projectServices from './projectServices';


function* getProjects(request) {
    yield* apiSaga(
        projectServices.projects,
        request.payload,
        projectActions.storageProjects
    );
}

function* addTag(request) {
    yield* apiSaga(
        projectServices.addTag,
        request.payload,
        projectActions.storageNewTag,
        request.payload
    );
}

function* deleteTag(request) {
    yield* apiSaga(
        projectServices.deleteTag,
        request.payload,
        projectActions.storageDeleteTag,
        request.payload
    );
}

export default function* userSaga() {
    yield takeEvery(projectTypes.GET_ALL_PROJECT_REQUEST, getProjects);
    yield takeEvery(projectTypes.ADD_TAG_REQUEST, addTag);
    yield takeEvery(projectTypes.DELETE_TAG_REQUEST, deleteTag);
}