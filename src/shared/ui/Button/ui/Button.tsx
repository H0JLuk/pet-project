import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from '@/shared/lib/classNames';

import cls from './Button.module.scss';

export enum VariantButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: VariantButton;
};

export const Button = ({
  className,
  children,
  type = 'button',
  variant = VariantButton.PRIMARY,
  ...buttonProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...buttonProps} type={type} className={classNames(cls.button, {}, [className, cls[variant]])}>
      {children}
    </button>
  );
};
