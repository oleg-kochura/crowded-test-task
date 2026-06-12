import { Star } from 'lucide-react';
import { useFavouritesStore } from 'shared/store/favourites';
import { FavouriteCard } from '../FavouriteCard';
import { EmptyStateHint } from 'shared/ui/EmptyStateHint';

export const FavouritesList = () => {
  const items = useFavouritesStore((s) => s.items);
  const toggle = useFavouritesStore((s) => s.toggle);

  if (items.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <EmptyStateHint
          icon={<Star size={28} />}
          title="No favourites yet"
          description="Tap the star icon on any event to save it for quick access later."
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <FavouriteCard key={item.event.id} item={item} onRemove={() => toggle(item)} />
      ))}
    </div>
  );
};
