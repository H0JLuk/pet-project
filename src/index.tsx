import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/shared/config/i18n/i18n';
import { ThemeProvider } from '@/shared/config/providers/ThemeProvider';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';

import App from '@/app/App';

import { PageError } from '@/pages/PageError';
import { StoreProvider } from './app/providers/store';

import './app/styles/index.scss';

const container = document.getElementById('root');
if (!container) {
  document.body.innerHTML =
    '<h1 style="display: flex;align-items:center;justify-content:center;height:100vh">Разработчик, ты — дибил 🤢🤮🤡❌</h1>';
  throw new Error('Add <div id="root"></div> inside body tag');
}
const root = createRoot(container);

root.render(
  <StoreProvider initialState={{ user: {} }}>
    <BrowserRouter>
      <ErrorBoundary fallback={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
