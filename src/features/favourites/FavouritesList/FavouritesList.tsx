import { Star } from 'lucide-react';

import { EmptyStateHint } from 'shared/ui/EmptyStateHint';
import { useFavouritesStore } from 'shared/store/favourites';

import { FavouriteCard } from '../FavouriteCard';

export const FavouritesList = () => {
  const favourites = useFavouritesStore((s) => s.items);
  const toggle = useFavouritesStore((s) => s.toggle);

  if (favourites.length === 0) {
    return (
      <EmptyStateHint
        icon={<Star size={28} />}
        title="No favourites yet"
        description="Tap the star icon on any event to save it for quick access later."
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {favourites.map((item) => (
        <FavouriteCard key={item.event.id} item={item} onRemove={() => toggle(item)} />
      ))}
    </div>
  );
};
