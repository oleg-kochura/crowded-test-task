import { AppErrorBoundary } from 'layout/AppErrorBoundary';
import { AppLayout } from 'layout/AppLayout';
import { FeatureErrorBoundary } from 'layout/FeatureErrorBoundary';
import { Column } from 'shared/ui/Column';
import { SWRProvider } from 'app/providers/SWRProvider';
import { SearchBar } from 'features/search/SearchBar';
import { ArtistPanel } from 'features/artist/ArtistPanel';
import { EventDetailsPanel } from 'features/events/EventDetailsPanel';
import { FavouritesPanel } from 'features/favourites/FavouritesPanel';

import 'app/styles/index.css';

export const App = () => (
  <AppErrorBoundary>
    <SWRProvider>
      <AppLayout>
        <Column.Grid>
          <Column.Header>
            <SearchBar />
          </Column.Header>
          <Column.Header>
            <Column.Title>Selected Event Information</Column.Title>
          </Column.Header>
          <Column.Header>
            <Column.Title>Favourites</Column.Title>
          </Column.Header>

          <Column.Body>
            <FeatureErrorBoundary description="Couldn't load the artist panel.">
              <ArtistPanel />
            </FeatureErrorBoundary>
          </Column.Body>
          <Column.Body>
            <FeatureErrorBoundary description="Couldn't load the event details panel.">
              <EventDetailsPanel />
            </FeatureErrorBoundary>
          </Column.Body>
          <Column.Body>
            <FeatureErrorBoundary description="Couldn't load the favourites panel.">
              <FavouritesPanel />
            </FeatureErrorBoundary>
          </Column.Body>
        </Column.Grid>
      </AppLayout>
    </SWRProvider>
  </AppErrorBoundary>
);
