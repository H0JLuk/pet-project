import { Suspense } from 'react';

import { classNames } from '@/shared/lib/classNames';

import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from '@/widgets/Navbar';

function App() {
  return (
    <div className={classNames('app')}>
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
