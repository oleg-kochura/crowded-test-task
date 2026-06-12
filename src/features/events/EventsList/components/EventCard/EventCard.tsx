import { Card } from '@heroui/react';
import { MapPin } from 'lucide-react';

import type { ArtistEvent } from 'shared/api/artists';
import { formatDate } from 'lib/utils';

type Props = {
  event: ArtistEvent;
  isSelected: boolean;
  onClick: () => void;
};

export const EventCard = ({ event, isSelected, onClick }: Props) => {
  return (
    <Card className={`w-full transition-colors ${isSelected ? 'ring-2 ring-accent' : ''}`}>
      <Card.Content className="p-0">
        <button
          type="button"
          className="w-full cursor-pointer text-left px-4 py-3"
          onClick={onClick}
          aria-label={`Event on ${formatDate(event.datetime)} at ${event.venue.name}, ${event.venue.city}`}
        >
          <span className="block font-medium text-sm">{formatDate(event.datetime)}</span>
          <span className="flex items-center gap-1 text-muted text-sm mt-0.5">
            <MapPin size={13} aria-hidden="true" />
            <span className="truncate">
              {event.venue.name}, {event.venue.city}
              {event.venue.region ? `, ${event.venue.region}` : ''}
            </span>
          </span>
          {event.lineup.length > 0 && (
            <span className="block text-xs text-muted truncate mt-0.5">
              {event.lineup.join(', ')}
            </span>
          )}
        </button>
      </Card.Content>
    </Card>
  );
};
