import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppErrorBoundary } from 'features/layout/AppErrorBoundary';

import { SWRProvider } from './SWRProvider.tsx';
import { App } from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
      <SWRProvider>
        <App />
      </SWRProvider>
    </AppErrorBoundary>
  </StrictMode>,
);
