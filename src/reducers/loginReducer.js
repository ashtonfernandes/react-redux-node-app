import { types } from '../actions/types';

const INITIAL_STATE = {
    profile: localStorage.getItem('profile'),
    loginError: null
};

export const isLoggedIn = (state) => {
    if (state.profile && !state.loginError) {
        return true;
    }
}

// REDUCERS
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
        localStorage.setItem('profile', action.profile.username);
            return {
                ...state,
                profile: action.profile
            };

        case types.LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            };
        
        case types.LOGOUT_SUCCESS:
        localStorage.removeItem('profile');
            return {
                ...state,
                profile: false
            };

        default:
            return state;
    }
};