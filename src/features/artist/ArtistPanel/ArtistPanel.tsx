import { Mic2 } from 'lucide-react';

import { ArtistCard } from 'features/artist/ArtistCard/ArtistCard';
import { ArtistCardSkeleton } from 'features/artist/ArtistCardSkeleton';
import { EventsList } from 'features/events/EventsList';
import { EmptyStateHint } from 'shared/ui/EmptyStateHint';
import { NotFoundEmptyState } from 'shared/ui/NotFoundEmptyState';
import { useArtistSearchStore } from 'shared/store/artistSearch';

import { useFetchArtistQuery, useFetchArtistEventsQuery } from 'shared/api/artists';

export const ArtistPanel = () => {
  const artistName = useArtistSearchStore((s) => s.artistName);
  const { artist, isArtistLoading, error } = useFetchArtistQuery(artistName);
  const { events, isEventsLoading } = useFetchArtistEventsQuery(artistName);

  if (!artistName && !isArtistLoading) {
    return (
      <EmptyStateHint
        icon={<Mic2 size={28} />}
        title="Ready to Discover?"
        description="Search for your favourite artist to see their upcoming world tour dates and local concerts."
      />
    );
  }

  if (isArtistLoading) {
    return <ArtistCardSkeleton />;
  }

  if (error) {
    return (
      <NotFoundEmptyState
        title="Artist not found"
        description="We couldn't find an artist with that name. Try checking the spelling."
      />
    );
  }

  return (
    <>
      <ArtistCard artist={artist} />
      <EventsList events={events} isLoading={isEventsLoading} />
    </>
  );
};
