import { emptySplitLastFmApi } from 'services/lastFm/lastFm';
import { ChartGetTopTracksArg, ChartGetTopTracksResult } from '../types';
import { chartGetTopTracksTransform } from './chartGetTopTracksTransform/chartGetTopTracksTransform';

const topTracksApi = emptySplitLastFmApi.injectEndpoints({
  endpoints: (build) => ({
    chartGetTopTracks: build.query<ChartGetTopTracksResult, ChartGetTopTracksArg>({
      query: ({ page = 1, limit = 18 }) => ({
        method: 'GET',
        params: { method: 'chart.gettoptracks', page, limit },
      }),

      transformResponse: chartGetTopTracksTransform,
    }),
  }),
  overrideExisting: false,
});

export const { useChartGetTopTracksQuery, usePrefetch } = topTracksApi;
