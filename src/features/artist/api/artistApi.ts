import { emptySplitLastFmApi } from 'services/lastFm';
import { ArtistGetInfoArg, ArtistGetInfoDocument, ArtistGetInfoResult } from '../types';
import { massageTags } from './massageTags';

const artistApi = emptySplitLastFmApi.injectEndpoints({
  endpoints: (build) => ({
    artistGetInfo: build.query<ArtistGetInfoResult, ArtistGetInfoArg>({
      query: ({ artistName }) => ({
        method: 'GET',
        params: { method: 'artist.getinfo', artist: artistName },
      }),

      transformResponse: (baseQueryReturnValue: ArtistGetInfoDocument | undefined) => {
        const artistDocument = baseQueryReturnValue?.artist;
        if (!artistDocument?.name) return { artist: null };

        const artist = {
          name: artistDocument.name,
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

export const { useArtistGetInfoQuery, usePrefetch } = artistApi;
