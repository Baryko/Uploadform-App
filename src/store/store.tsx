import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Cookies } from './store.types';

const InitialFilesState: Cookies = {
  isAccepted: false,
};

const filesSlice = createSlice({
  name: 'cookies',
  initialState: InitialFilesState,
  reducers: {
    setCookie(state, { payload }) {
      return {
        ...state,
        isAccepted: payload,
      };
    },
  },
});

export const { setCookie } = filesSlice.actions;

export const store = configureStore({
  reducer: filesSlice.reducer,
});
