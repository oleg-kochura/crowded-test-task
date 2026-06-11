import { Chip } from '@heroui/react';
import { EventCard } from '../EventCard';
import { EventsListSkeleton } from '../EventsListSkeleton';
import type { ArtistEvent } from 'shared/favourites';
import { NotFoundEmptyState } from 'features/layout/NotFoundEmptyState';
import { useArtistSearchStore } from 'features/search/store/useArtistSearchStore';

type Props = {
  events: ArtistEvent[] | undefined;
  isLoading: boolean;
};

export const EventsList = ({ events, isLoading }: Props) => {
  const selectedEventId = useArtistSearchStore((s) => s.selectedEvent?.id ?? null);
  const selectEvent = useArtistSearchStore((s) => s.selectEvent);

  if (isLoading) {
    return <EventsListSkeleton />;
  }

  if (!events || events.length === 0) {
    return (
      <NotFoundEmptyState
        title="No events found"
        description="This artist has no upcoming events at the moment."
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Upcoming Events
        </p>
        <Chip size="sm" variant="soft">
          {events.length} {events.length === 1 ? 'result' : 'results'}
        </Chip>
      </div>
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
