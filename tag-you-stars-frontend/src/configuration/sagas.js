import {all} from 'redux-saga/effects';

//import identificationSaga from '../modules/Identification/data/identificationSaga';
import userSaga from '../modules/data/userSaga';

export default function* watchMany() {
    yield all([
        userSaga(),
    ]);
};