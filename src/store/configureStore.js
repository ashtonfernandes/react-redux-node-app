import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../reducers/loginReducer';

const initialState = {};
const middleWare = [thunk];

export default () => { 
    const store = createStore(
        loginReducer, initialState, applyMiddleware(...middleWare)
    );
    return store;
};