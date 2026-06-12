import { Button, Card, Chip } from '@heroui/react';
import { ExternalLink, Star } from 'lucide-react';

import { useFavouritesStore, useIsFavourite } from 'shared/store/favourites';
import { useArtistEventsStore } from 'shared/store/artistEvents';
import { formatDate } from 'lib/utils';

import type { ArtistEvent } from 'shared/api/artists';

type Props = {
  event: ArtistEvent;
};

export const EventInfo = ({ event }: Props) => {
  const artistName = useArtistEventsStore((s) => s.artistName);
  const toggle = useFavouritesStore((s) => s.toggle);
  const favourite = useIsFavourite(event.id);

  return (
    <Card>
      <Card.Header>
        <div className="flex justify-between items-start gap-2 w-full">
          <div>
            <p className="text-xs text-muted uppercase tracking-wide mb-1">Event information</p>
            <p className="text-sm font-semibold">{formatDate(event.datetime)}</p>
          </div>
          <Button
            isIconOnly
            variant={favourite ? 'primary' : 'outline'}
            size="sm"
            onPress={() => toggle({ event, artistName })}
            aria-label={favourite ? 'Remove from favourites' : 'Add to favourites'}
          >
            <Star size={16} fill={favourite ? 'currentColor' : 'none'} />
          </Button>
        </div>
      </Card.Header>
      <Card.Content className="flex flex-col gap-2">
        {event.description && <p className="text-sm">{event.description}</p>}
        {event.on_sale_datetime && (
          <p className="text-sm text-muted">
            On sale: <span className="text-foreground">{formatDate(event.on_sale_datetime)}</span>
          </p>
        )}
        {event.lineup.length > 0 && (
          <div>
            <p className="text-sm text-muted mb-1">Lineup:</p>
            <div className="flex flex-wrap gap-1">
              {event.lineup.map((name) => (
                <Chip key={name} variant="soft">
                  {name}
                </Chip>
              ))}
            </div>
          </div>
        )}
        {event.url && (
          <a
            href={event.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline mt-1"
          >
            <ExternalLink size={14} aria-hidden="true" />
            Event page
          </a>
        )}
      </Card.Content>
    </Card>
  );
};
