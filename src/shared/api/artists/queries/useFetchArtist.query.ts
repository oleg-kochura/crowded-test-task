import useSWR, { type SWRConfiguration } from 'swr';

import type { Artist } from '../model';
import { fetchArtistRequest, type FetchArtistRequestParams } from '../requests';

export const useFetchArtistQuery = (
  params: FetchArtistRequestParams,
  config?: SWRConfiguration,
) => {
  const { data, error, isLoading } = useSWR<Artist>(
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
