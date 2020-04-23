import {combineReducers} from 'redux';

import {reducer as notifications} from 'react-notification-system-redux';
import userReducer from '../modules/data/userReducer';
import projectsReducer from '../modules/data/projectsReducer';

export default combineReducers({
    projectsReducer,
    userReducer,
    notifications
});