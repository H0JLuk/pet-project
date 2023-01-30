import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';

import './styles/index.scss';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/help-me-pls' element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
