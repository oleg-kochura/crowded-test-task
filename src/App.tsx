import { useState } from 'react';
import { Spinner } from '@heroui/react';

import { Header } from 'src/features/layout/Header';
import { SectionTitle } from 'src/features/layout/SectionTitle';
import { SearchBar } from 'src/features/search/SearchBar';
import { ArtistCard } from 'src/features/artist/ArtistCard';
import { EventsList } from 'src/features/events/EventsList';
import { EventDetails } from 'src/features/event-details/EventDetails';
import { FavouritesList } from 'src/features/favourites/FavouritesList';

import { useFetchArtistQuery } from 'shared/api/artists/queries';
import { useFetchArtistEventsQuery } from 'shared/api/artists/queries';

import type { ArtistEvent } from 'shared/favourites';

import './App.css';

export const App = () => {
  const [artistName, setArtistName] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<ArtistEvent | null>(null);

  const { artist, isLoading: artistLoading, error: artistError } = useFetchArtistQuery(artistName);
  const { events, isLoading: eventsLoading } = useFetchArtistEventsQuery(artistName);

  const handleSearch = (name: string) => {
    setArtistName(name);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 lg:divide-x lg:divide-default-200">
          <section className="flex flex-col gap-4">
            <SearchBar onSearch={handleSearch} isLoading={artistLoading} />

            {artistLoading && (
              <div className="flex justify-center py-4">
                <Spinner />
              </div>
            )}

            {artistError && <p className="text-danger text-sm text-center">Artist not found.</p>}

            {artist && !artistLoading && (
              <>
                <ArtistCard artist={artist} />
                <EventsList
                  events={events}
                  isLoading={eventsLoading}
                  selectedEventId={selectedEvent?.id ?? null}
                  onSelectEvent={setSelectedEvent}
                />
              </>
            )}
          </section>

          <section className="flex flex-col gap-4 lg:pl-12">
            <SectionTitle>Selected event information</SectionTitle>
            {selectedEvent ? (
              <EventDetails event={selectedEvent} artistName={artistName} />
            ) : (
              <p className="text-default-400 text-sm text-center py-4">
                Select an event to see details.
              </p>
            )}
          </section>

          <section className="flex flex-col gap-4 lg:pl-12">
            <SectionTitle>Favourites</SectionTitle>
            <FavouritesList />
          </section>
        </div>
      </main>
    </div>
  );
};
