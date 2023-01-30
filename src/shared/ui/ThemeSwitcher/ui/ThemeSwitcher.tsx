import { Theme, useTheme } from '@/shared/config/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';

import cls from './ThemeSwitcher.module.scss';

export type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type='button' onClick={toggleTheme} className={classNames(cls.themeSwitcher, {}, [className])}>
      Switch theme
    </button>
  );
};
