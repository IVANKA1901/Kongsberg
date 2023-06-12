import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './createSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
