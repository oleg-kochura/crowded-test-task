import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SWRProvider } from './SWRProvider.tsx';
import { FavouritesProvider } from 'shared/favourites';
import { App } from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRProvider>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </SWRProvider>
  </StrictMode>,
);
