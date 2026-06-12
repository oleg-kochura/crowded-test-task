import { Button, Card, Chip } from '@heroui/react';
import { ExternalLink, Star } from 'lucide-react';
import { useFavouritesStore, useIsFavourite } from 'shared/store/favourites';
import type { ArtistEvent } from 'shared/api/artists';
import { useArtistSearchStore } from 'shared/store/artistSearch';

type Props = {
  event: ArtistEvent;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

const offerVariant = (status: string): 'primary' | 'secondary' | 'soft' => {
  if (status === 'available') return 'primary';
  if (status === 'unavailable') return 'secondary';
  return 'soft';
};

export const EventDetails = ({ event }: Props) => {
  const artistName = useArtistSearchStore((s) => s.artistName);
  const toggle = useFavouritesStore((s) => s.toggle);
  const favourite = useIsFavourite(event.id);

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <Card.Header>
          <div className="flex justify-between items-start gap-2 w-full">
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-1">
                Event information
              </p>
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
              On sale:{' '}
              <span className="text-foreground">
                {new Date(event.on_sale_datetime).toLocaleDateString('en-US')}
              </span>
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

      <Card>
        <Card.Header>
          <p className="text-xs text-muted uppercase tracking-wide">Venue information</p>
        </Card.Header>
        <Card.Content className="flex flex-col gap-1">
          <p className="font-medium">{event.venue.name}</p>
          <p className="text-sm text-muted">
            {[event.venue.city, event.venue.region, event.venue.country].filter(Boolean).join(', ')}
          </p>
          {event.venue.latitude && event.venue.longitude && (
            <a
              href={`https://maps.google.com/?q=${event.venue.latitude},${event.venue.longitude}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent hover:underline mt-1 inline-block"
            >
              View on map ↗
            </a>
          )}
        </Card.Content>
      </Card>

      {event.offers.length > 0 && (
        <Card>
          <Card.Header>
            <p className="text-xs text-muted uppercase tracking-wide">Special offers</p>
          </Card.Header>
          <Card.Content className="flex flex-col gap-3">
            {event.offers.map((offer, i) => (
              <div key={i} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Chip variant={offerVariant(offer.status)} size="sm">
                    {offer.status}
                  </Chip>
                  <span className="text-sm">{offer.type}</span>
                </div>
                <a
                  href={offer.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  Get tickets ↗
                </a>
              </div>
            ))}
          </Card.Content>
        </Card>
      )}
    </div>
  );
};
