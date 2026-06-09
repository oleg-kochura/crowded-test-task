import { Spinner } from '@heroui/react';
import { EventCard } from './EventCard';
import type { ArtistEvent } from 'shared/favourites';

type Props = {
  events: ArtistEvent[] | undefined;
  isLoading: boolean;
  selectedEventId: string | null;
  onSelectEvent: (event: ArtistEvent) => void;
};

export const EventsList = ({ events, isLoading, selectedEventId, onSelectEvent }: Props) => {
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <Spinner />
      </div>
    );
  }

  if (!events || events.length === 0) {
    return <p className="text-default-400 text-sm text-center py-4">No events found.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isSelected={event.id === selectedEventId}
          onClick={() => onSelectEvent(event)}
        />
      ))}
    </div>
  );
};
