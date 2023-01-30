import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '@/shared/config/routeConfig';

function AppRouter() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {routeConfig.map(routeProps => (
          <Route {...routeProps} key={routeProps.path} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
