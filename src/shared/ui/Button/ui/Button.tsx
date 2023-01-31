import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { useTheme } from '@/shared/config/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';

import cls from './Button.module.scss';

export enum VariantButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  type: 'submit' | 'button';
  variant: VariantButton;
};

export const Button = ({
  className,
  children,
  type = 'button',
  variant,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) => {
  const { theme } = useTheme();

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...buttonProps} type={type} className={classNames(cls.button, {}, [className, cls[variant], cls[theme]])}>
      {children}
    </button>
  );
};
