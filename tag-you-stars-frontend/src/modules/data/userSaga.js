import {takeEvery} from 'redux-saga/effects';

import {types as userTypes, actions as userActions} from '././userReducer';

import apiSaga from '../../utils/apiSaga';
import userServices from './userServices';


function* getUser() {
    yield* apiSaga(
        userServices.user,
        {},
        userActions.storageUserLogged
    );
}


export default function* userSaga() {
    yield takeEvery(userTypes.GET_USER_REQUEST, getUser);
}