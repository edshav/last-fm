import { emptySplitLastFmApi } from 'services/lastFm/lastFm';
import { TrackSearchArg, SearchTrackResult } from '../types';
import { trackSearchTransform } from './trackSearchTransform/trackSearchTransform';

const trackSearchApi = emptySplitLastFmApi.injectEndpoints({
  endpoints: (build) => ({
    trackSearch: build.query<SearchTrackResult, TrackSearchArg>({
      query: ({ track, artist, limit = 20, page = 1 }) => ({
        method: 'GET',
        params: { method: 'track.search', track, artist, limit, page },
      }),

      transformResponse: trackSearchTransform,
    }),
  }),
  overrideExisting: false,
});

export const { useTrackSearchQuery, usePrefetch } = trackSearchApi;
