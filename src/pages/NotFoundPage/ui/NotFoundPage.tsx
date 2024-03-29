import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';

import cls from './NotFoundPage.module.scss';

export type NotFoundPageProps = {
  className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return <div className={classNames(cls.notFoundPage, {}, [className])}>{t('Страница не найдена')}</div>;
};
