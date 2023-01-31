import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type AppLinkProps = LinkProps & {
  className?: string;
  theme?: AppLinkTheme;
};

export const AppLink = ({
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...linkProps
}: PropsWithChildren<AppLinkProps>) => {
  return (
    <Link {...linkProps} className={classNames('', {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
};
