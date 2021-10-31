import { ArtistImagesDocument, ArtistImageSize } from '../../types';

export const massageImages = (images: ArtistImagesDocument): Record<ArtistImageSize, string> =>
  images.reduce(
    (acc: Record<ArtistImageSize, string>, img) => {
      return Object.assign(acc, {
        [img.size]: img['#text'],
      });
    },
    {
      small: 'public/img/small.webp',
      medium: '/img/medium.webp',
      large: '/img/large.webp',
      extralarge: '/img/extraLarge.webp',
      mega: '/img/mega.webp',
    }
  );
