import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(() => [], {}, applyMiddleware(thunk));
  return store;
};



// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers/index.js';

// const initialState = {};
// const middleWare = [thunk];
// const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare));

// export default store;