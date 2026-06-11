import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { FavouriteItem } from './favourites.types';

type FavouritesState = {
  items: FavouriteItem[];
  toggle: (item: FavouriteItem) => void;
};

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (item) =>
        set({
          items: get().items.some((f) => f.event.id === item.event.id)
            ? get().items.filter((f) => f.event.id !== item.event.id)
            : [...get().items, item],
        }),
    }),
    {
      name: 'whos-in-town:favourites',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ items: s.items }),
    },
  ),
);

export const useIsFavourite = (eventId: string) =>
  useFavouritesStore((s) => s.items.some((f) => f.event.id === eventId));
