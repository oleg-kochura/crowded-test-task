import { AppLayout } from 'features/layout/AppLayout';
import { Column } from 'features/layout/Column';
import { FeatureErrorBoundary } from 'features/layout/FeatureErrorBoundary';
import { SearchBar } from 'features/search/SearchBar';
import { ArtistPanel } from 'features/artist/ArtistPanel';
import { EventDetailsPanel } from 'features/events/EventDetailsPanel';
import { FavouritesPanel } from 'features/favourites/FavouritesPanel';

import './App.css';

export const App = () => (
  <AppLayout>
    <div className="grid grid-cols-[4fr_4fr_4fr] gap-x-12 gap-y-4">
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
    </div>
  </AppLayout>
);
