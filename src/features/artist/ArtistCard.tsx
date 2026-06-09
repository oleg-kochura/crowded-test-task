import { Card } from '@heroui/react';
import type { FetchArtistResponse } from 'shared/api/artists';

type Props = {
  artist: FetchArtistResponse;
};

export const ArtistCard = ({ artist }: Props) => {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-4">
      <Card>
        <Card.Content className="p-0 aspect-square">
          <img
            src={artist.image_url || artist.thumb_url}
            alt={artist.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </Card.Content>
      </Card>

      <Card>
        <Card.Content className="flex flex-col justify-center gap-1.5 h-full">
          <h3 className="text-lg font-semibold leading-tight text-foreground">{artist.name}</h3>
          <p className="text-sm font-medium text-primary">
            {artist.upcoming_event_count} upcoming event{artist.upcoming_event_count !== 1 ? 's' : ''}
          </p>
          <p className="text-xs text-default-400">
            {artist.tracker_count.toLocaleString()} fans tracking
          </p>
        </Card.Content>
      </Card>
    </div>
  );
};
