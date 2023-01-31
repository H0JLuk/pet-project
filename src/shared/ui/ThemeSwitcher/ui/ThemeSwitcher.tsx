import { useTheme } from '@/shared/config/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';
import { Button, VariantButton } from '@/shared/ui/Button';

import cls from './ThemeSwitcher.module.scss';

export type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={VariantButton.CLEAR}
      type='button'
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      Switch theme
    </Button>
  );
};
