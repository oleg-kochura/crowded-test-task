import { Info } from 'lucide-react';

import { EventDetails } from 'features/events/EventDetails';
import { EmptyStateHint } from 'features/layout/EmptyStateHint';
import { useArtistSearchStore } from 'features/search/store/useArtistSearchStore';

export const EventDetailsPanel = () => {
  const selectedEvent = useArtistSearchStore((s) => s.selectedEvent);

  return (
    <>
      {selectedEvent ? (
        <EventDetails event={selectedEvent} />
      ) : (
        <EmptyStateHint
          icon={<Info size={28} />}
          title="Selected Event Information"
          description="Choose an event from the list on the left to see full details, venue maps, and special offers."
        />
      )}
    </>
  );
};
