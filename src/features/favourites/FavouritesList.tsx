import { useFavourites } from 'shared/favourites';
import { FavouriteCard } from './FavouriteCard';

export const FavouritesList = () => {
  const { items, toggle } = useFavourites();

  if (items.length === 0) {
    return (
      <p className="text-default-400 text-sm text-center py-4">No favourites yet.</p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <FavouriteCard
          key={item.event.id}
          item={item}
          onRemove={() => toggle(item)}
        />
      ))}
    </div>
  );
};
