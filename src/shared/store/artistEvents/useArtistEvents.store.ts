import { create } from 'zustand';

import type { ArtistEvent } from 'shared/api/artists';

type ArtistEventsState = {
  artistName: string;
  selectedEvent: ArtistEvent | null;
  search: (name: string) => void;
  selectEvent: (event: ArtistEvent | null) => void;
};

export const useArtistEventsStore = create<ArtistEventsState>((set) => ({
  artistName: '',
  selectedEvent: null,
  search: (name) => set({ artistName: name, selectedEvent: null }),
  selectEvent: (event) => set({ selectedEvent: event }),
}));
