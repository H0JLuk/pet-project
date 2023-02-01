import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader';

import cls from './PageLoader.module.scss';

type PageLoaderProps = {
  className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader color='var(--inverted-bg-color)' />
    </div>
  );
};
