import { types } from '../actions/loginActions';

const INITIAL_STATE = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null
};

export const isLoggedIn = (state) => {
    if (state.isLoginSuccess && !state.loginError) {
        return true;
    } else {
        return false;
    }
}

// REDUCERS
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };

        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: action.loginError
            };

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isLoginSuccess: false
            };

        default:
            return state;
    }
};