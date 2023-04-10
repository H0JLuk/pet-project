import { userReducers } from '@/entities/user';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './StateSchema';

export const createReduxStore = (initialState: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducers,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS__DEV__,
    preloadedState: initialState,
  });
};
