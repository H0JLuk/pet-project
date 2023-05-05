import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginForm } from '../../model/selectors/selectLoginForm';
import { loginFormActions, loginFormReducers } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export type LoginFormProps = {
  className?: string;
};

export const LoginForm = ({ className }: LoginFormProps) => {
  const loginForm = useSelector(selectLoginForm);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginFormActions.setUsername(value));
    },
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginFormActions.setPassword(value));
    },
    [dispatch],
  );

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        name='username'
        value={loginForm.username}
        onChange={handleChangeUsername}
        className={cls.input}
        placeholder={t<string>('Введите имя')}
      />
      <Input
        name='password'
        value={loginForm.password}
        onChange={handleChangePassword}
        className={cls.input}
        placeholder={t<string>('Введите пароль')}
      />
      <Button className={cls.btn}>{t('Войти')}</Button>
    </div>
  );
};
