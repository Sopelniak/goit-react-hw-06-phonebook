import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { filterReducer, usersReducer } from './users/users-reducers';

// // Початкове значення стану Redux для кореневого редюсера,
// // якщо не передати параметр preloadedState.
// const initialState = {
//   contacts: [],
//   filter: '',
// };
// // Поки що використовуємо редюсер який
// // тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

const rootReducer = combineReducers({
  contacts: usersReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, enhancer);
