import { FC } from 'react';
import { parseError } from 'utils/parseError';
import { useChartGetTopTracksQuery } from '../topTracksApi';
import { TrackCard } from './TrackCard/TrackCard';
import classes from './classes.module.css';

type Props = {
  page: number | undefined;
  limit: number | undefined;
};

export const TopTracksView: FC<Props> = ({ page, limit }) => {
  const { data, isLoading, isError, error } = useChartGetTopTracksQuery({ page, limit });
  console.log({ isError });

  const tracks = data?.tracks;
  const errorMessage = parseError(error);

  if (isLoading) return <>...Loading</>;
  if (isError) return <>{errorMessage}</>;
  if (!tracks) return null;
  console.log(tracks);

  return (
    <div className={classes.container}>
      {tracks.map(({ artist, image, name }, index) => (
        <TrackCard
          key={index}
          trackTitle={name}
          artistName={artist.name}
          href={artist.url}
          imageSrc={image}
        />
      ))}
    </div>
  );
};
