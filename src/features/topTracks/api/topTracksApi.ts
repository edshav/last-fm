import { emptySplitLastFmApi } from 'services/lastFm';
import { parseInteger } from 'utils/parseInteger';
import { ChartGetTopTracksArg, ChartGetTopTracksDocument, ChartGetTopTracksResult } from '../types';
import { massageTracks } from './utils/massageTracks';

const topTracksApi = emptySplitLastFmApi.injectEndpoints({
  endpoints: (build) => ({
    chartGetTopTracks: build.query<ChartGetTopTracksResult, ChartGetTopTracksArg>({
      query: ({ page = 1, limit = 18 }) => ({
        method: 'GET',
        params: { method: 'chart.gettoptracks', page, limit },
      }),

      transformResponse: (baseQueryReturnValue: ChartGetTopTracksDocument | undefined) => {
        if (!baseQueryReturnValue) return { tracks: [] };
        const tracksDocument = baseQueryReturnValue?.tracks?.track;

        const metaDocument = baseQueryReturnValue.tracks?.['@attr'];

        const tracks = massageTracks(tracksDocument);

        const meta = {
          page: parseInteger(metaDocument?.page),
          perPage: parseInteger(metaDocument?.perPage),
          totalPages: parseInteger(metaDocument?.totalPages),
          total: parseInteger(metaDocument?.total),
        };

        return { tracks, meta };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useChartGetTopTracksQuery } = topTracksApi;
