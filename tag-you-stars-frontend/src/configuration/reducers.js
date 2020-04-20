import {combineReducers} from 'redux';

import {reducer as notifications} from 'react-notification-system-redux';
import userReducer from '../modules/data/userReducer';
import repositoriesReducer from '../modules/data/repositoriesReducer';

export default combineReducers({
    repositoriesReducer,
    userReducer,
    notifications
});