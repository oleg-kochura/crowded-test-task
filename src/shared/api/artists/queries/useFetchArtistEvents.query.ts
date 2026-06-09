import useSWR, { type SWRConfiguration } from 'swr';

import {
  fetchArtistEventsRequest,
  type FetchArtistEventsResponse,
  type FetchArtistEventsRequestParams,
} from '../requests';

export const useFetchArtistEventsQuery = (
  params: FetchArtistEventsRequestParams,
  config?: SWRConfiguration,
) => {
  const { data, error, isLoading } = useSWR<FetchArtistEventsResponse>(
    params ? [params, 'fetch-artist-events-query'] : null,
    ([params]) => fetchArtistEventsRequest(params),
    config,
  );

  return {
    events: data,
    error,
    isLoading,
  };
};
