import { FC } from 'react';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { Pagination } from 'components/Pagination/Pagination';
import { TrackCardList } from './components/TrackCardList';
import { Track } from '../types';

type Props = {
  onPrefetchChartTopTracks: (prefetchingPage: number) => void;
  tracks: Track[] | undefined;
  paginationProps: { page: number | null | undefined; totalPages: number | null | undefined };
};

export const TopTracksView: FC<Props> = ({ onPrefetchChartTopTracks, tracks, paginationProps }) => {
  useDocumentTitle('Top Tracks');
  const { page, totalPages } = paginationProps;
  const paginationView =
    page && totalPages && totalPages > 1 ? (
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPrefetch={onPrefetchChartTopTracks}
      />
    ) : null;

  return (
    <>
      {tracks ? <TrackCardList tracks={tracks} /> : null}
      {paginationView}
    </>
  );
};
