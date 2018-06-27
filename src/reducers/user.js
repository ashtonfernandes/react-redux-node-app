// import { types } from '../actions/types';

// export default (state={}, action={}) => {
//     console.log(action)
//     switch (action.type) {
//         case types.LOGIN_PENDING:
//             return {
//                 isLoginPending: action.isLoginPending
//             };

//         case types.LOGIN_SUCCESS:
//         localStorage.setItem('profile', action.profile.username);
//             return action.user

//         case types.LOGIN_ERROR:
//             return {
//                 ...state,
//                 loginError: action.loginError
//             };

//         case types.LOGOUT_SUCCESS:
//         localStorage.removeItem('profile');
//             return {
//                 ...state,
//                 profile: false
//             };
//         default:
//             return state;
//     }
// };