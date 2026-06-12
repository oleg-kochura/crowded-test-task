import { Card } from '@heroui/react';

import type { ArtistEvent } from 'shared/api/artists';

type Props = {
  venue: ArtistEvent['venue'];
};

export const VenueInfo = ({ venue }: Props) => {
  return (
    <Card>
      <Card.Header>
        <p className="text-xs text-muted uppercase tracking-wide">Venue information</p>
      </Card.Header>
      <Card.Content className="flex flex-col gap-1">
        <p className="font-medium">{venue.name}</p>
        <p className="text-sm text-muted">
          {[venue.city, venue.region, venue.country].filter(Boolean).join(', ')}
        </p>
        {venue.latitude && venue.longitude && (
          <a
            href={`https://maps.google.com/?q=${venue.latitude},${venue.longitude}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent hover:underline mt-1 inline-block"
          >
            View on map ↗
          </a>
        )}
      </Card.Content>
    </Card>
  );
};
