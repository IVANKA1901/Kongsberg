import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
