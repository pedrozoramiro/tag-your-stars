import { call, put, delay } from 'redux-saga/effects';
//import { actions as loadingActions } from '../components/AppLoading/loadingReducer';
//import { showErrorMessage, showSuccessMessage } from '../components/AppNotifications/notifications';
const defaultSettings = {
    callSuccessFunction: false
};

export default function* apiSaga(fn, parameter, success, successMessage, failure, settings = {}) {
    const config = { ...defaultSettings, ...settings };
    const { callSuccessFunction } = config;
    try {
       // yield put(loadingActions.showLoading());
        const response = yield call(fn, parameter);
        const data = response ? response.data : {};
        if (success) {
            yield (callSuccessFunction ? call(success, data) : put(success(data)));
           // yield put(showSuccessMessage(successMessage || 'Concluído com sucesso !'));
        }
        yield delay(1000);
    } catch (error) {
        if (failure) {
            yield put(failure(error));
        }
        //yield put(showErrorMessage(error));
    } finally {
        //yield put(loadingActions.hideLoading());
    }
}