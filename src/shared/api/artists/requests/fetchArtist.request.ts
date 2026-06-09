import { apiClient } from 'src/lib/apiClient';

export type FetchArtistRequestParams = string;

export type FetchArtistResponse = {
  id: number;
  name: string;
  url: string;
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  mbid: string;
  tracker_count: number;
  upcoming_event_count: number;
};

export const fetchArtistRequest = async (
  artistName: FetchArtistRequestParams,
): Promise<FetchArtistResponse> => {
  const response = await apiClient.get(`/artists/${artistName}`);

  return response.data;
};
