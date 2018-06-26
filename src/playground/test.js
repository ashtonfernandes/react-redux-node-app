// import { createStore } from 'redux';

// // ACTION GENERATORS

// const incrementCount = ({incrementBy = 1} = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// });

// const decrementCount = ({decrementBy = 1} = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
// });

// // REDUCERS
// // pure functions 
// // never change state or action

// const countReducer = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + action.incrementBy
//             };

//         case 'DECREMENT':
//             return {
//                 count: state.count - action.decrementBy
//             };

//         case 'RESET':
//             return {
//                 count: 0
//             };

//         default:
//             return state;
//     }
// };

// //STORE

// const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });


// // ACTIONS

// // increment the count
// store.dispatch(incrementCount({ incrementBy: 5 }));

// // decrement the count
// store.dispatch(decrementCount());

// // reset the count
// store.dispatch(
//     {
//         type: 'RESET'
//     }
// );