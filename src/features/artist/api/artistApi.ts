import { emptySplitLastFmApi } from 'services/lastFm';
import { ArtistGetInfoArg, ArtistGetInfoDocument, ArtistGetInfoResult } from '../types';
import { massageImages } from './utils/massageImages';
import { massageTags } from './utils/massageTags';

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
          imageSet: massageImages(artistDocument.image),
          tags: massageTags(artistDocument.tags?.tag),
          bio: artistDocument.bio?.content ?? null,
        };

        return { artist };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useArtistGetInfoQuery, usePrefetch } = artistApi;
