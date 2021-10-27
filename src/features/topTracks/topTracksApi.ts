import { emptySplitLastFmApi } from 'services/lastFm';
import { ChartGetTopTracksArg, ChartGetTopTracksResult } from './types';

const topTracksApi = emptySplitLastFmApi.injectEndpoints({
  endpoints: (build) => ({
    chartGetTopTracks: build.query<ChartGetTopTracksResult, ChartGetTopTracksArg>({
      query: ({ page, limit }) => ({
        method: 'GET',
        params: { method: 'chart.gettoptracks', page, limit },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useChartGetTopTracksQuery } = topTracksApi;
