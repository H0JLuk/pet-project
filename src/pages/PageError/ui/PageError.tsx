import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';

import { PageLoader } from '@/widgets/PageLoader';

import cls from './PageError.module.scss';

export type PageErrorProps = {
  className?: string;
};

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <div className={classNames(cls.pageError, {}, [className])}>
        <p className={cls.title}>{t('Произошла непредвиденная ошибка')}</p>

        <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
      </div>
    </Suspense>
  );
};
