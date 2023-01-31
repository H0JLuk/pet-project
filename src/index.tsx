import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/shared/config/i18n/i18n';
import { ThemeProvider } from '@/shared/config/providers/ThemeProvider';

import App from '@/app/App';

const container = document.getElementById('root');
if (!container) {
  document.body.innerHTML =
    '<h1 style="display: flex;align-items:center;justify-content:center;height:100vh">Разработчик, ты — дибил 🤢🤮🤡❌</h1>';
  throw new Error('Add <div id="root"></div> inside body tag');
}
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
