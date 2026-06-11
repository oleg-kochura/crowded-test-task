import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SWRProvider } from './SWRProvider.tsx';
import { App } from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRProvider>
      <App />
    </SWRProvider>
  </StrictMode>,
);
