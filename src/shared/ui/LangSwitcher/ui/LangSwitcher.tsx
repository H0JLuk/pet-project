import { useTranslation } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18n';
import { classNames } from '@/shared/lib/classNames';
import { Button, VariantButton } from '@/shared/ui/Button';

export type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t } = useTranslation();

  const changeLang = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      variant={VariantButton.CLEAR}
      type='button'
      onClick={changeLang}
      className={classNames('lang', {}, [className])}
    >
      {t('Перевод')}
    </Button>
  );
};
