import { FC } from 'react';
import { Track } from 'features/topTracks/types';
import classes from './classes.module.css';
import { TrackCard } from '../TrackCard/TrackCard';

type Props = {
  tracks: Track[];
};

export const TrackCardList: FC<Props> = ({ tracks }) => {
  return (
    <ul className={classes.container}>
      {tracks?.map(({ artist, imageSet, title }, index) => (
        <TrackCard
          key={index}
          title={title}
          artistName={artist.name}
          href={artist.url}
          imageSet={imageSet}
        />
      )) ?? null}
    </ul>
  );
};
