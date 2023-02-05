import { classNames } from '@/shared/lib/classNames';

import cls from './Loader.module.scss';

export type LoaderProps = {
  color?: string;
  className?: string;
};

export const Loader = ({ className, color = '#fff' }: LoaderProps) => {
  return (
    <div className={classNames(cls.loaderElement, {}, [className])}>
      {Array.from({ length: 8 }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};
