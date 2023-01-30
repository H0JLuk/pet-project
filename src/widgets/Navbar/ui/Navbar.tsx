import { Link } from 'react-router-dom';

import { AppRoutes } from '@/shared/config/routeConfig';
import { classNames } from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

import cls from './Navbar.module.scss';

export type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />

      <div className={cls.links}>
        <AppLink to={AppRoutes.MAIN} theme={AppLinkTheme.PRIMARY}>
          Главная
        </AppLink>
        <AppLink to={AppRoutes.ABOUT} theme={AppLinkTheme.SECONDARY}>
          О попи
        </AppLink>
      </div>
    </div>
  );
};
