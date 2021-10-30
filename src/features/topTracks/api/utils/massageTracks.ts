import { TracksImageSize, Track, TrackDocument } from 'features/topTracks/types';

export const massageTracks = (tracksDocument: TrackDocument[] | undefined): Track[] | undefined =>
  tracksDocument?.map(({ name, artist, image }) => ({
    title: name,
    artist: {
      name: artist.name,
      url: artist?.url ?? null,
    },
    imageSet: image.reduce(
      (acc: Record<TracksImageSize, string>, img) => {
        return Object.assign(acc, {
          [img.size]: img['#text'],
        });
      },
      {
        small: '',
        medium: '',
        large: '',
        extralarge: '',
      }
    ),
  }));
