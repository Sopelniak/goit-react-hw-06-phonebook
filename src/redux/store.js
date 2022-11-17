// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { combineReducers , createStore } from 'redux';
import { filterReducer, usersReducer } from './users/users-reducers';
import { configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   contacts: usersReducer,
//   filter: filterReducer,
// });

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: {
    contacts: usersReducer,
    filter: filterReducer,
  },
});
