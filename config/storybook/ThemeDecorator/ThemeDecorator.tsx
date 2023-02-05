import { PropsWithChildren, useMemo } from 'react';
import { Story } from '@storybook/react';
import addons from '@storybook/addons';
import { UPDATE_DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';

import { Theme, ThemeContext } from '@/shared/config/providers/ThemeProvider';

const channel = addons.getChannel();

const ThemeWrapper = ({ children }: PropsWithChildren) => {
  const isDarkTheme = useDarkMode();

  const currentTheme = isDarkTheme ? Theme.DARK : Theme.LIGHT;

  const themeCtx = useMemo(
    () => ({
      setTheme: () => channel.emit(UPDATE_DARK_MODE_EVENT_NAME),
      theme: currentTheme,
    }),
    [currentTheme],
  );

  return (
    <ThemeContext.Provider value={themeCtx}>
      <div className={`app ${currentTheme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const ThemeDecorator = (StoryComponent: Story) => (
  <ThemeWrapper>
    <StoryComponent />
  </ThemeWrapper>
);
