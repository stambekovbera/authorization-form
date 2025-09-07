import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'app/App';

async function enableMocking() {
  const { worker } = await import('./shared/api');

  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
