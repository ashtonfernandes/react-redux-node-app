// const LOGIN_PENDING = 'LOGIN_PENDING'
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
// const LOGIN_ERROR = 'LOGIN_ERROR'

// import { login as loginAPI } from '../Service/service';

// ACTION GENERATORS
export const setLoginPending = (isLoginPending) => ({
    type: 'LOGIN_PENDING',
    isLoginPending
})

export const setLoginSuccess = (isLoginSuccess) => ({
    type: 'LOGIN_SUCCESS',
    isLoginSuccess
})

export const setLoginError = (loginError) => ({
    type: 'LOGIN_ERROR',
    loginError
})

const sendLoginRequest = (username, password) => {
    console.log('<<<<<<< checking username and password >>>>>>>');
    return new Promise((resolve, reject) => {
        if (username == 'test' && password == 'user') {
            console.log('<<<<<<< matched >>>>>>>');
            return resolve(true);
        } else {
            console.log('<<<<<<< incorrect >>>>>>>');
            return reject( new Error('Invalid credentials'));
        }
    })
}

// ACTIONS 
export const login = (username, password) => dispatch => {
    return sendLoginRequest(username, password)
        .then(success => {
            // console.log('<<<<<<<< success >>>>>>>>>', success);
            dispatch(setLoginPending(false))
            dispatch(setLoginSuccess(true))
            dispatch(setLoginError(null))
            return Promise.resolve(success);
        })
        .catch(err => {
            // console.log('<<<<<<<< err >>>>>>>>>', err);
            dispatch(setLoginPending(true))
            dispatch(setLoginSuccess(false))
            dispatch(setLoginError(err))
            return Promise.reject(err);
        })
}

// export const login = (username, password) => dispatch => {
//     return loginAPI(username, password).then(success => {
//         console.log('success', success);
//         dispatch(setLoginPending(false))
//         dispatch(setLoginSuccess(true))
//         dispatch(setLoginError(null))
//     }, err => {
//         console.log('err', err);
//         dispatch(setLoginPending(true))
//         dispatch(setLoginSuccess(false))
//         dispatch(setLoginError(err))
//     })
// }