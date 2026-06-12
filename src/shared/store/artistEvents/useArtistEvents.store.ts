import { create } from 'zustand';
import type { ArtistEventsState } from './artistEvents.type';

export const useArtistEventsStore = create<ArtistEventsState>((set) => ({
  artistName: '',
  selectedEvent: null,
  search: (name) => set({ artistName: name, selectedEvent: null }),
  selectEvent: (event) => set({ selectedEvent: event }),
}));
