import { loginUser } from '../Service/service';

export const types = {
    LOGIN_PENDING: 'LOGIN_PENDING',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
}

// ACTION GENERATORS
export const setLoginPending = (isLoginPending) => ({
    type: types.LOGIN_PENDING,
    isLoginPending
});

export const setLoginSuccess = (profile) => ({
    type: types.LOGIN_SUCCESS,
    profile
});

export const setLoginError = (loginError) => ({
    type: types.LOGIN_ERROR,
    loginError
});

export const setLogoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS
});

// const sendLoginRequest = (username, password) => {
//     return new Promise((resolve, reject) => {
//         if (username == 'test' && password == 'user') {
//             return resolve(true);
//         } else {
//             return reject( new Error('Invalid credentials'));
//         }
//     })
// }

// ACTIONS 
export const login = (username, password) => dispatch => {
    return loginUser(username, password)
        .then(profile => {
            console.log('<<<<<<< profile >>>>>>>>', profile);
            dispatch(setLoginPending(false))
            dispatch(setLoginSuccess(profile))
            dispatch(setLoginError(null))
            return Promise.resolve(profile);
        })
        .catch(err => {
            console.log('<<<<<<< err >>>>>>>>', err);
            dispatch(setLoginPending(true))
            dispatch(setLoginSuccess(false))
            dispatch(setLoginError(err))
            return Promise.reject(err);
        })
}

export const logout = () => dispatch => {
    dispatch(setLogoutSuccess());
    return Promise.resolve(true);
}