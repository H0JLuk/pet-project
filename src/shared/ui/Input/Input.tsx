import { classNames } from '@/shared/lib/classNames';
import { ChangeEventHandler, InputHTMLAttributes, memo, useEffect } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export type InputProps = HTMLInputProps & {
  onChange?(value: string): void;
};

export const Input = memo(({ className, placeholder, type = 'text', onChange, ...rest }: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cls.inputWrapper}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <input
        {...rest}
        type={type}
        onChange={handleChange}
        placeholder=''
        className={classNames(cls.input, {}, [className])}
      />
    </div>
  );
});
