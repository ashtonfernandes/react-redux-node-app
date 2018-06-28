import { types } from './types';

// ACTION GENERATORS
export const localeSet = (lang) => ({
    type: types.LOCALE_SET,
    lang
});


// THUNK ACTIONS 
export const setLocale = (lang) => dispatch => {
    dispatch(localeSet(lang));
}