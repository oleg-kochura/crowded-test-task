import type { FetchArtistEventsResponse } from 'shared/api/artists';

export type ArtistEvent = FetchArtistEventsResponse[number];

export type FavouriteItem = {
  event: ArtistEvent;
  artistName: string;
};
