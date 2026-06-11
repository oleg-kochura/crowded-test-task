import { Card } from '@heroui/react';
import { MapPin } from 'lucide-react';
import type { ArtistEvent } from 'shared/favourites';

type Props = {
  event: ArtistEvent;
  isSelected: boolean;
  onClick: () => void;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export const EventCard = ({ event, isSelected, onClick }: Props) => {
  return (
    <Card className={`w-full transition-colors ${isSelected ? 'ring-2 ring-accent' : ''}`}>
      <Card.Content className="p-0">
        <button
          type="button"
          className="w-full cursor-pointer text-left px-4 py-3"
          onClick={onClick}
        >
          <p className="font-medium text-sm">{formatDate(event.datetime)}</p>
          <div className="flex items-center gap-1 text-muted text-sm mt-0.5">
            <MapPin size={13} />
            <span className="truncate">
              {event.venue.name}, {event.venue.city}
              {event.venue.region ? `, ${event.venue.region}` : ''}
            </span>
          </div>
          {event.lineup.length > 0 && (
            <p className="text-xs text-muted truncate mt-0.5">{event.lineup.join(', ')}</p>
          )}
        </button>
      </Card.Content>
    </Card>
  );
};
