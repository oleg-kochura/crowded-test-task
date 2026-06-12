import { NotFoundEmptyState } from 'shared/ui/NotFoundEmptyState';
import { useArtistEventsStore } from 'shared/store/artistEvents';
import { useFetchArtistEventsQuery } from 'shared/api/artists';

import { EventCard } from './components/EventCard';
import { EventsListSkeleton } from './components/EventsListSkeleton';

export const EventsList = () => {
  const artistName = useArtistEventsStore((s) => s.artistName);
  const selectedEventId = useArtistEventsStore((s) => s.selectedEvent?.id ?? null);
  const selectEvent = useArtistEventsStore((s) => s.selectEvent);
  const { events, isEventsLoading } = useFetchArtistEventsQuery(artistName);

  if (isEventsLoading) {
    return <EventsListSkeleton />;
  }

  if (!events?.length) {
    return (
      <NotFoundEmptyState
        title="No events found"
        description="This artist has no upcoming events at the moment."
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">Upcoming Events</p>

      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isSelected={event.id === selectedEventId}
          onClick={() => selectEvent(event)}
        />
      ))}
    </div>
  );
};
