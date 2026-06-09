import { useEffect, useState } from 'react';
import { FavouritesContext } from './FavouritesContext';
import type { FavouriteItem } from './favourites.types';

const STORAGE_KEY = 'whos-in-town:favourites';

function loadFromStorage(): FavouriteItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FavouriteItem[]) : [];
  } catch {
    return [];
  }
}

export const FavouritesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<FavouriteItem[]>(loadFromStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const isFavourite = (eventId: string) => items.some((f) => f.event.id === eventId);

  const toggle = (item: FavouriteItem) => {
    setItems((prev) =>
      prev.some((f) => f.event.id === item.event.id)
        ? prev.filter((f) => f.event.id !== item.event.id)
        : [...prev, item],
    );
  };

  return (
    <FavouritesContext.Provider value={{ items, isFavourite, toggle }}>
      {children}
    </FavouritesContext.Provider>
  );
};
