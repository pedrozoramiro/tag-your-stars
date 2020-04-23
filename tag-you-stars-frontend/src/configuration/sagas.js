import {all} from 'redux-saga/effects';

import userSaga from '../modules/data/userSaga';
import projectSaga from '../modules/data/projectSaga';

export default function* watchMany() {
    yield all([
        projectSaga(),
        userSaga(),
    ]);
};