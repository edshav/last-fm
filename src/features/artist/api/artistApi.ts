import { emptySplitLastFmApi } from 'services/lastFm/lastFm';
import { ArtistGetInfoArg, ArtistGetInfoResult } from '../types';
import { artistGetInfoTransform } from './artistGetInfoTransform/artistGetInfoTransform';

const artistApi = emptySplitLastFmApi.injectEndpoints({
  endpoints: (build) => ({
    artistGetInfo: build.query<ArtistGetInfoResult, ArtistGetInfoArg>({
      query: ({ artistName }) => ({
        method: 'GET',
        params: { method: 'artist.getinfo', artist: artistName },
      }),
      transformResponse: artistGetInfoTransform,
    }),
  }),
  overrideExisting: false,
});

export const { useArtistGetInfoQuery, usePrefetch } = artistApi;
