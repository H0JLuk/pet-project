import { Suspense } from 'react';

import { useTheme } from '@/shared/config/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';

import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from '@/widgets/Navbar';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
