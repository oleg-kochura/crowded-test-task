import { Mic2 } from 'lucide-react';

import { ArtistCard } from 'features/artist/ArtistCard/ArtistCard';
import { ArtistCardSkeleton } from 'features/artist/ArtistCardSkeleton';
import { EventsList } from 'features/events/EventsList';
import { EmptyStateHint } from 'shared/ui/EmptyStateHint';
import { NotFoundEmptyState } from 'shared/ui/NotFoundEmptyState';
import { useArtistSearchStore } from 'shared/store/artistSearch';

import { useFetchArtistQuery, useFetchArtistEventsQuery } from 'shared/api/artists/queries';

export const ArtistPanel = () => {
  const artistName = useArtistSearchStore((s) => s.artistName);
  const { artist, isLoading, error } = useFetchArtistQuery(artistName);
  const { events, isLoading: eventsLoading } = useFetchArtistEventsQuery(artistName);

  return (
    <>
      {isLoading && <ArtistCardSkeleton />}

      {error && (
        <NotFoundEmptyState
          title="Artist not found"
          description="We couldn't find an artist with that name. Try checking the spelling."
        />
      )}

      {!artistName && !isLoading && (
        <EmptyStateHint
          icon={<Mic2 size={28} />}
          title="Ready to Discover?"
          description="Search for your favourite artist to see their upcoming world tour dates and local concerts."
        />
      )}

      {artist && !isLoading && (
        <>
          <ArtistCard artist={artist} />
          <EventsList events={events} isLoading={eventsLoading} />
        </>
      )}
    </>
  );
};
