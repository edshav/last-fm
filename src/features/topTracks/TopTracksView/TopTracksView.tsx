import { FC } from 'react';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'hooks/useSearchParams';
import { parseInteger } from 'utils/parseInteger';
import { useChartGetTopTracksQuery } from '../api/topTracksApi';
import { TrackCard } from './TrackCard/TrackCard';
import classes from './classes.module.css';

export const TopTracksView: FC = () => {
  const { page: currentPage } = useSearchParams(['page']);
  const { data, isLoading, isError, error } = useChartGetTopTracksQuery({
    page: parseInteger(currentPage) ?? undefined,
  });

  const tracks = data?.tracks;
  const { page, totalPages } = data?.meta ?? {};

  const paginationView =
    page && totalPages ? <Pagination page={page} totalPages={totalPages} /> : null;

  return (
    <Loader isLoading={isLoading} isError={isError} error={error}>
      <ul className={classes.container}>
        {tracks?.map(({ artist, image, title }, index) => (
          <TrackCard
            key={index}
            title={title}
            artistName={artist.name}
            href={artist.url}
            imageSrc={image}
          />
        )) ?? null}
      </ul>
      {paginationView}
    </Loader>
  );
};
