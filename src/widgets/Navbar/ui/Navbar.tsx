import { useTranslation } from 'react-i18next';

import { AppRoutes } from '@/shared/config/routeConfig';
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
        <AppLink to={AppRoutes.MAIN} theme={AppLinkTheme.PRIMARY}>
          Главная
        </AppLink>
        <AppLink to={AppRoutes.ABOUT} theme={AppLinkTheme.SECONDARY}>
          Пися попа
        </AppLink>
      </div>
    </div>
  );
};
