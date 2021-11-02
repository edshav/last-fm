import { FC } from 'react';
import { styled } from 'styles/stitches.config';
import { Track } from 'features/topTracks/types';
import { TrackCard } from './TrackCard';

type Props = {
  tracks: Track[];
};

export const TrackCardList: FC<Props> = ({ tracks }) => {
  return (
    <Container>
      {tracks?.map(({ artist, imageSet, title }, index) => (
        <TrackCard
          key={index}
          title={title}
          artistName={artist.name}
          href={artist.url}
          imageSet={imageSet}
        />
      )) ?? null}
    </Container>
  );
};

const Container = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$5',
  justifyContent: 'space-evenly',
});
