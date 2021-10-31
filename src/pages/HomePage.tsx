import { Loader } from 'components/Loader/Loader';
import { useChartGetTopTracksQuery } from 'features/topTracks/api/topTracksApi';
import { usePrefetchTopTracks } from 'features/topTracks/TopTracksView/hooks/usePrefetchTopTracks';
import { TopTracksView } from 'features/topTracks/TopTracksView/TopTracksView';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { useSearchParams } from 'hooks/useSearchParams';
import { parseInteger } from 'utils/parseInteger';

const HomePage = () => {
  useDocumentTitle(null);
  const { page: currentPage } = useSearchParams(['page']);
  const { data, isLoading, isError, error } = useChartGetTopTracksQuery({
    page: parseInteger(currentPage) ?? undefined,
  });
  const { onPrefetchChartTopTracks } = usePrefetchTopTracks();

  const tracks = data?.tracks;
  const { page, totalPages } = data?.meta ?? {};

  return (
    <Loader isLoading={isLoading} isError={isError} error={error} hasData={!!tracks?.length}>
      <TopTracksView
        onPrefetchChartTopTracks={onPrefetchChartTopTracks}
        tracks={tracks}
        paginationProps={{ page, totalPages }}
      />
    </Loader>
  );
};

export default HomePage;
