import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'app/App';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  return worker.start({
    serviceWorker: {
      url: '/authorization-form/mockServiceWorker.js',
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
