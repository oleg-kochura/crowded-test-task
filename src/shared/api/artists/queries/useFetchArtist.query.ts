import useSWR, { type SWRConfiguration } from 'swr';

import {
  fetchArtistRequest,
  type FetchArtistResponse,
  type FetchArtistRequestParams,
} from '../requests';

export const useFetchArtistQuery = (
  params: FetchArtistRequestParams,
  config?: SWRConfiguration,
) => {
  const { data, error, isLoading } = useSWR<FetchArtistResponse>(
    params ? [params, 'fetch-artist-query'] : null,
    ([params]) => fetchArtistRequest(params),
    config,
  );

  return {
    artist: data,
    error,
    isLoading,
  };
};
