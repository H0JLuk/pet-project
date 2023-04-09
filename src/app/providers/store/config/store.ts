import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';

export const createReduxStore = (initialState: StateSchema) =>
  configureStore<StateSchema>({
    reducer: { counter: (state, action) => ({ value: 1 }) },
    devTools: __IS__DEV__,
    preloadedState: initialState,
  });
