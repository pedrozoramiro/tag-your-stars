import {takeEvery} from 'redux-saga/effects';

import {types as projectTypes, actions as projectActions} from './projectsReducer';

import apiSaga from '../../utils/apiSaga';
import projectServices from './projectServices';


function* getProjects() {
    yield* apiSaga(
        projectServices.projects,
        {},
        projectActions.storageProjects
    );
}


export default function* userSaga() {
    yield takeEvery(projectTypes.GET_ALL_PROJECT_REQUEST, getProjects);
}