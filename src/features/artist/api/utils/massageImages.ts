import { ArtistImagesDocument, ArtistImageSize } from '../../types';

export const massageImages = (images: ArtistImagesDocument): Record<ArtistImageSize, string> =>
  images.reduce(
    (acc: Record<ArtistImageSize, string>, img) => {
      return Object.assign(acc, {
        [img.size]: img['#text'],
      });
    },
    {
      small: '',
      medium: '',
      large: '',
      extralarge: '',
      mega: '',
    }
  );
