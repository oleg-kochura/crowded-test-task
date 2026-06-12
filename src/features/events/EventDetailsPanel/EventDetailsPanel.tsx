import { Info } from 'lucide-react';

import { EventDetails } from 'features/events/EventDetails';
import { EmptyStateHint } from 'shared/ui/EmptyStateHint';
import { useArtistSearchStore } from 'shared/store/artistSearch';

export const EventDetailsPanel = () => {
  const selectedEvent = useArtistSearchStore((s) => s.selectedEvent);

  if (!selectedEvent) {
    return (
      <EmptyStateHint
        icon={<Info size={28} />}
        title="Selected Event Information"
        description="Choose an event from the list on the left to see full details, venue maps, and special offers."
      />
    );
  }

  return <EventDetails event={selectedEvent} />;
};
