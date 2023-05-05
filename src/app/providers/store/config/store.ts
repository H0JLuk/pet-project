import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducers } from '@/entities/user';
import { loginApi, loginFormReducers } from '@/features/AuthByUsername';
import type { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducers,
    loginForm: loginFormReducers,
    [loginApi.reducerPath]: loginApi.reducer,
  };

  return configureStore<any>({
    reducer: rootReducers,
    devTools: __IS__DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loginApi.middleware),
  });
};
