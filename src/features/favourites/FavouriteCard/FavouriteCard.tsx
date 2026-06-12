import { Button, Card } from '@heroui/react';
import { Star } from 'lucide-react';

import { formatDate } from 'lib/utils';

import type { FavouriteItem } from 'shared/store/favourites';

type Props = {
  item: FavouriteItem;
  onRemove: () => void;
};

export const FavouriteCard = ({ item, onRemove }: Props) => {
  const { event, artistName } = item;

  return (
    <Card className="w-full">
      <Card.Content className="flex flex-row items-center gap-3 py-2">
        <Button
          isIconOnly
          size="sm"
          variant="ghost"
          onPress={onRemove}
          aria-label="Remove from favourites"
        >
          <Star size={16} fill="currentColor" className="text-warning" />
        </Button>
        <div className="flex flex-col min-w-0 flex-1">
          <p className="text-sm font-medium truncate">{artistName}</p>
          <p className="text-xs text-muted truncate">
            {event.venue.name}, {event.venue.city}
          </p>
          <p className="text-xs text-muted">{formatDate(event.datetime)}</p>
        </div>
      </Card.Content>
    </Card>
  );
};
