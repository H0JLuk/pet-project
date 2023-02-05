import { StyleDecorator } from './StyleDecorator/StyleDecorator';
import { addDecorator, Parameters } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { ThemeDecorator } from './ThemeDecorator/ThemeDecorator';
// import i18n from './i18nDecorator/i18next';
// import { i18nDecorator } from './i18nDecorator/i18nDecorator';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // i18n,
  // locale: 'en',
  // locales: {
  //   en: 'English',
  //   ru: 'Russian',
  // },
  reactRouter: {
    routerPath: '/',
  },
};

addDecorator(withRouter);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator);
// addDecorator(i18nDecorator);
