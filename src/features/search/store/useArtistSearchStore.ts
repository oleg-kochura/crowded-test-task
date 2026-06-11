import { create } from 'zustand';
import type { ArtistEvent } from 'shared/favourites';

type ArtistSearchState = {
  artistName: string;
  selectedEvent: ArtistEvent | null;
  search: (name: string) => void;
  selectEvent: (event: ArtistEvent | null) => void;
};

export const useArtistSearchStore = create<ArtistSearchState>((set) => ({
  artistName: '',
  selectedEvent: null,
  search: (name) => set({ artistName: name, selectedEvent: null }),
  selectEvent: (event) => set({ selectedEvent: event }),
}));
