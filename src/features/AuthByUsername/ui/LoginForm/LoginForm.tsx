import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

export type LoginFormProps = {
  className?: string;
};

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input name='username' className={cls.input} placeholder={t<string>('Введите имя')} />
      <Input name='password' className={cls.input} placeholder={t<string>('Введите пароль')} />
      <Button className={cls.btn}>{t('Войти')}</Button>
    </div>
  );
};
