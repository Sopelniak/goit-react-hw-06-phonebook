import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { filterReducer, usersReducer } from './users/users-reducers';

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  contacts: usersReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, enhancer);
