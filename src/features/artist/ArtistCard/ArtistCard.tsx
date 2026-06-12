import { Avatar, Card } from '@heroui/react';
import { ExternalLink } from 'lucide-react';

import { NotFoundEmptyState } from 'shared/ui/NotFoundEmptyState';
import { useArtistEventsStore } from 'shared/store/artistEvents';
import { useFetchArtistQuery } from 'shared/api/artists';
import { ArtistCardSkeleton } from 'features/artist/ArtistCardSkeleton';

export const ArtistCard = () => {
  const artistName = useArtistEventsStore((s) => s.artistName);
  const { artist, isArtistLoading, error } = useFetchArtistQuery(artistName);

  if (isArtistLoading) {
    return <ArtistCardSkeleton />;
  }

  if (error || !artist) {
    return (
      <NotFoundEmptyState
        title="Artist not found"
        description="We couldn't find an artist with that name. Try checking the spelling."
      />
    );
  }

  return (
    <div className="grid grid-cols-[13rem_1fr] gap-4">
      <Card>
        <Card.Content className="p-0 aspect-square">
          <Avatar className="w-full h-full rounded-xl">
            <Avatar.Image src={artist.image_url || artist.thumb_url} className="object-cover" />
            <Avatar.Fallback className="text-4xl">{artist.name.charAt(0)}</Avatar.Fallback>
          </Avatar>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content className="flex flex-col justify-center gap-3 h-full py-6 px-6">
          <h3 className="text-xl font-bold leading-tight text-foreground">{artist.name}</h3>
          <p className="text-base font-semibold text-accent">
            {artist.upcoming_event_count} upcoming event
            {artist.upcoming_event_count !== 1 ? 's' : ''}
          </p>
          <p className="text-sm text-muted">
            {artist.tracker_count.toLocaleString()} fans tracking
          </p>
          {(artist.url || artist.facebook_page_url) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
              {artist.url && (
                <a
                  href={artist.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline whitespace-nowrap shrink-0"
                >
                  <ExternalLink size={14} aria-hidden="true" className="shrink-0" />
                  View profile
                </a>
              )}
              {artist.facebook_page_url && (
                <a
                  href={artist.facebook_page_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline whitespace-nowrap shrink-0"
                >
                  <ExternalLink size={14} aria-hidden="true" className="shrink-0" />
                  Facebook
                </a>
              )}
            </div>
          )}
        </Card.Content>
      </Card>
    </div>
  );
};
