import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext<ThemeContextProps>(ThemeContext);

  const toggleTheme = () => {
    const oldTheme = theme ?? Theme.DARK;
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.classList.remove(oldTheme);
    document.body.classList.add(newTheme);
  };

  return {
    theme: theme!,
    toggleTheme,
  };
}
