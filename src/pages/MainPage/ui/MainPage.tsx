import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function MainPage() {
  const { t } = useTranslation('main-page');

  return (
    <div>
      <p>{t('Главная страница')}</p>

      <Link to='/help-me-pls'>help-me</Link>
    </div>
  );
}

export default MainPage;
