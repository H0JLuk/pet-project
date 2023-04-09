import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StoreProvider } from '@/app/providers/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store/config/StateSchema';

export interface componentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
}

export function renderWithTranslation(component: ReactNode, options: componentRenderOptions) {
  const { initialState } = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </StoreProvider>,
  );
}
