import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '..';
import { StateSchema } from '../config/StateSchema';

export type StoreProviderProps = PropsWithChildren<{
  initialState?: StateSchema;
}>;

export const StoreProvider = ({ initialState, children }: StoreProviderProps) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
