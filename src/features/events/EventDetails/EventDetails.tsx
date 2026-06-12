import { Info } from 'lucide-react';

import { EmptyStateHint } from 'shared/ui/EmptyStateHint';
import { useArtistEventsStore } from 'shared/store/artistEvents';

import { EventInfo } from './components/EventInfo';
import { VenueInfo } from './components/VenueInfo';
import { SpecialOffers } from './components/SpecialOffers';

export const EventDetails = () => {
  const event = useArtistEventsStore((s) => s.selectedEvent);

  if (!event) {
    return (
      <EmptyStateHint
        icon={<Info size={28} />}
        title="Selected Event Information"
        description="Choose an event from the list on the left to see full details, venue maps, and special offers."
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <EventInfo event={event} />
      <VenueInfo venue={event.venue} />
      <SpecialOffers offers={event.offers} />
    </div>
  );
};
