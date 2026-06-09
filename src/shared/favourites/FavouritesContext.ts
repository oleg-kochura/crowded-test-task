import { createContext } from 'react';
import type { FavouriteItem } from './favourites.types';

export type FavouritesContextValue = {
  items: FavouriteItem[];
  isFavourite: (eventId: string) => boolean;
  toggle: (item: FavouriteItem) => void;
};

export const FavouritesContext = createContext<FavouritesContextValue | null>(null);
