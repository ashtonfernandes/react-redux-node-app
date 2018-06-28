import { types } from '../actions/types';

const INITIAL_STATE = {
    lang: localStorage.getItem('lang')
};

// REDUCERS
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOCALE_SET:
        localStorage.setItem('lang', action.lang);
            return {
                ...state,
                lang: action.lang
            };
        default:
            return state;
    }
};