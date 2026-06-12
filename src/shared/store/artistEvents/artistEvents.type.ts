import type { ArtistEvent } from 'shared/api/artists';

export type ArtistEventsState = {
  artistName: string;
  selectedEvent: ArtistEvent | null;
  search: (name: string) => void;
  selectEvent: (event: ArtistEvent | null) => void;
};
