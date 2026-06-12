import { apiClient } from 'src/lib/apiClient';

import type { Artist } from '../model';

export type FetchArtistRequestParams = string;

export const fetchArtistRequest = async (artistName: FetchArtistRequestParams): Promise<Artist> => {
  const response = await apiClient.get<Artist>(`/artists/${artistName}`);

  return response.data;
};
