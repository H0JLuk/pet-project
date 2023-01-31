import { Suspense } from 'react';

import { useTheme } from '@/shared/config/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback='Translations loading...'>
        <Navbar className='чьлен' />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
