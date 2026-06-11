import { AppLayout } from 'features/layout/AppLayout';
import { Column } from 'features/layout/Column';
import { SearchBar } from 'features/search/SearchBar';
import { ArtistPanel } from 'features/artist/ArtistPanel';
import { EventDetailsPanel } from 'features/events/EventDetailsPanel';
import { FavouritesPanel } from 'features/favourites/FavouritesPanel';

import './App.css';

export const App = () => {
  return (
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
          <ArtistPanel />
        </Column.Body>
        <Column.Body>
          <EventDetailsPanel />
        </Column.Body>
        <Column.Body>
          <FavouritesPanel />
        </Column.Body>
      </div>
    </AppLayout>
  );
};
