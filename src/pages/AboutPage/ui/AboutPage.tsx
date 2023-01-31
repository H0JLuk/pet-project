import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AboutPage() {
  const { t } = useTranslation('about-page');

  return (
    <div>
      <p>{t('О сайте')}</p>

      <Link to='/'>Main</Link>
    </div>
  );
}

export default AboutPage;
