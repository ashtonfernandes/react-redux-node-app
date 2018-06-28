import { combineReducers } from 'redux';
// import user from './user';
import loginReducer from './loginReducer';
import localeReducer from './localeReducer';

export default combineReducers({
    loginReducer,
    localeReducer
})