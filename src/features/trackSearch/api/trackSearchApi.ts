import { emptySplitLastFmApi } from 'services/lastFm';
import { TrackSearchArg, SearchResultsDocument, SearchTrackResult } from '../types';
import { massageMeta } from './utils/massageMeta';
import { massageResults } from './utils/massageResults';

const trackSearchApi = emptySplitLastFmApi.injectEndpoints({
  endpoints: (build) => ({
    trackSearch: build.query<SearchTrackResult, TrackSearchArg>({
      query: ({ track, artist, limit = 20, page = 1 }) => ({
        method: 'GET',
        params: { method: 'track.search', track, artist, limit, page },
      }),

      transformResponse: (baseQueryReturnValue: SearchResultsDocument | undefined) => {
        const { results: resultsDocument } = baseQueryReturnValue ?? {};
        const itemsPerPage = resultsDocument?.['opensearch:itemsPerPage'];
        const startPage = resultsDocument?.['opensearch:Query']?.startPage;
        const totalResults = resultsDocument?.['opensearch:totalResults'];

        const results = massageResults(resultsDocument?.trackmatches?.track);
        const meta = massageMeta({ itemsPerPage, startPage, totalResults });
        return { results, meta };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useTrackSearchQuery, usePrefetch } = trackSearchApi;
