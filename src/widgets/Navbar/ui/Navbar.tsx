import { useTranslation } from 'react-i18next';

import { RoutePath } from '@/shared/config/routeConfig';
import { classNames } from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

import cls from './Navbar.module.scss';

export type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.PRIMARY}>
          Главная
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
          Пися попа
        </AppLink>
      </div>
    </div>
  );
};
