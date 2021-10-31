import { FC } from 'react';
import { Pagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'hooks/useSearchParams';
import { parseInteger } from 'utils/parseInteger';
import { useChartGetTopTracksQuery } from '../api/topTracksApi';
import { TrackCardList } from './TrackCardList/TrackCardList';

export const TopTracksView: FC = () => {
  const { page: currentPage } = useSearchParams(['page']);
  const { data, isLoading, isError, error } = useChartGetTopTracksQuery({
    page: parseInteger(currentPage) ?? undefined,
  });

  const tracks = data?.tracks;
  const { page, totalPages } = data?.meta ?? {};

  const paginationView =
    page && totalPages && totalPages > 1 ? (
      <Pagination page={page} totalPages={totalPages} />
    ) : null;

  return (
    <Loader isLoading={isLoading} isError={isError} error={error} hasData={!!data?.tracks?.length}>
      {tracks ? <TrackCardList tracks={tracks} /> : null}
      {paginationView}
    </Loader>
  );
};
