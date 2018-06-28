import { LOCALE_SET } from './types';

// ACTION GENERATORS
export const localeSet = (lang) => ({
    type: LOCALE_SET,
    lang
});


// THUNK ACTIONS 
export const setLocale = (lang) => dispatch => {
    dispatch(localeSet(lang));
}