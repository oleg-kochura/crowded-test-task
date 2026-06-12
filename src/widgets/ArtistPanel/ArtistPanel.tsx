import { Mic2 } from 'lucide-react';

import { ArtistCard } from 'features/artist/ArtistCard';
import { EventsList } from 'features/events/EventsList';
import { EmptyStateHint } from 'shared/ui/EmptyStateHint';
import { useArtistEventsStore } from 'shared/store/artistEvents';
import { useFetchArtistQuery } from 'shared/api/artists';

export const ArtistPanel = () => {
  const artistName = useArtistEventsStore((s) => s.artistName);
  const { artist, isArtistLoading, error } = useFetchArtistQuery(artistName);

  if (!artistName) {
    return (
      <EmptyStateHint
        icon={<Mic2 size={28} />}
        title="Ready to Discover?"
        description="Search for your favourite artist to see their upcoming world tour dates and local concerts."
      />
    );
  }

  return (
    <>
      <ArtistCard />
      {!isArtistLoading && !error && artist && <EventsList />}
    </>
  );
};
