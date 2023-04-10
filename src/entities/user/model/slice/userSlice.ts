import { createSlice } from '@reduxjs/toolkit';

import type { UserSchema } from '../type/user';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducers } = userSlice;
