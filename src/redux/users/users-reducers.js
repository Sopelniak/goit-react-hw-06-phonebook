// import { createReducer } from '@reduxjs/toolkit';
// import { addUser, deleteUser, filterUsers } from './users-actions';
import { ADD_USER, DELETE_USER, FILTER_USERS } from './users-type';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// export const usersReducer = createReducer(initialState, {
//   [addUser]: (state, { payload }) =>
//     (state.contacts = [...state.contacts, payload]),

//   [deleteUser]: (state, { payload }) =>
//     (state.contacts = state.contacts.filter(user => user.id !== payload)),

//   [filterUsers]: (state, { payload }) => (state.filter = payload),
// });

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case DELETE_USER:
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_USERS:
      return action.payload;
    default:
      return state;
  }
};
