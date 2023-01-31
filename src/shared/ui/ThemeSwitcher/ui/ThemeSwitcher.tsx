import { useTheme } from '@/shared/config/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';
import { Button, VariantButton } from '@/shared/ui/Button';

export type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      variant={VariantButton.CLEAR}
      type='button'
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      Switch theme
    </Button>
  );
};
