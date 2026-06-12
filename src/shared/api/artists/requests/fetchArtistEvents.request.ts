import { apiClient } from 'lib/apiClient';

import type { ArtistEvent } from '../model';

export type FetchArtistEventsRequestParams = string;

export const fetchArtistEventsRequest = async (
  artistName: FetchArtistEventsRequestParams,
): Promise<ArtistEvent[]> => {
  const response = await apiClient.get<ArtistEvent[]>(`/artists/${artistName}/events`);

  return response.data;
};
