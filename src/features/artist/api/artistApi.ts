import { emptySplitLastFmApi } from 'services/lastFm';
import { ArtistGetInfoArg, ArtistGetInfoDocument, ArtistGetInfoResult } from '../types';
import { massageTags } from './massageTags';

const topTracksApi = emptySplitLastFmApi.injectEndpoints({
  endpoints: (build) => ({
    chartGetTopTracks: build.query<ArtistGetInfoResult, ArtistGetInfoArg>({
      query: ({ artistName }) => ({
        method: 'GET',
        params: { method: 'artist.getinfo', artist: artistName },
      }),

      transformResponse: (baseQueryReturnValue: ArtistGetInfoDocument) => {
        if (!baseQueryReturnValue) return { artist: null };
        const artistDocument = baseQueryReturnValue.artist;

        const artist = {
          name: artistDocument.name ?? null,
          image: artistDocument.image?.[4]['#text'] ?? null,
          tags: massageTags(artistDocument.tags?.tag),
          bio: {
            summary: artistDocument.bio?.summary ?? null,
            content: artistDocument.bio?.content ?? null,
          },
        };

        return { artist };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useChartGetTopTracksQuery } = topTracksApi;
