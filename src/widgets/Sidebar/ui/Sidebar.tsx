import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

import cls from './Sidebar.module.scss';
import { Button } from '@/shared/ui/Button';

export type SidebarProps = {
  className?: string;
  testId?: string;
};

export const Sidebar = ({ className, testId = 'sidebar' }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => setCollapsed(prev => !prev);

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid={testId}>
      <Button onClick={onToggle} data-testid='sidebar-toggle-btn'>
        {t('Свернуть')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
