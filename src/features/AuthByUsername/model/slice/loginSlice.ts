import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducers } = loginFormSlice;
