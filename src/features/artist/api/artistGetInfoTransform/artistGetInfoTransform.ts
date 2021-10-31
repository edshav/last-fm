import { ArtistGetInfoDocument, ArtistGetInfoResult } from '../../types';
import { massageImages } from './massageImages';
import { massageTags } from './massageTags';

export const artistGetInfoTransform = (
  baseQueryReturnValue: ArtistGetInfoDocument | undefined
): ArtistGetInfoResult | Promise<ArtistGetInfoResult> => {
  const artistDocument = baseQueryReturnValue?.artist;
  if (!artistDocument?.name) return { artist: null };

  const artist = {
    name: artistDocument.name,
    imageSet: massageImages(artistDocument.image),
    tags: massageTags(artistDocument.tags?.tag),
    bio: artistDocument.bio?.content ?? null,
  };

  return { artist };
};
