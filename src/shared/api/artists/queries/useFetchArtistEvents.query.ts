import useSWR, { type SWRConfiguration } from 'swr';

import type { ArtistEvent } from '../model';
import { fetchArtistEventsRequest, type FetchArtistEventsRequestParams } from '../requests';

export const useFetchArtistEventsQuery = (
  params: FetchArtistEventsRequestParams,
  config?: SWRConfiguration,
) => {
  const { data, error, isLoading } = useSWR<ArtistEvent[]>(
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
