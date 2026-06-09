import { apiClient } from 'lib/apiClient';

export type FetchArtistEventsRequestParams = string;

// TODO: transform to DTO

export type FetchArtistEventsResponse = Array<{
  id: string;
  artist_id: string;
  url: string;
  on_sale_datetime: string;
  datetime: string;
  description: string;
  venue: {
    name: string;
    latitude: string;
    longitude: string;
    city: string;
    region: string;
    country: string;
  };
  offers: Array<{
    type: string;
    url: string;
    status: string;
  }>;
  lineup: string[];
}>;

export const fetchArtistEventsRequest = async (artistName: FetchArtistEventsRequestParams) => {
  const response = await apiClient.get(`/artists/${artistName}/events`);

  return response.data;
};
