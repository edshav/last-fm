import { skipToken } from '@reduxjs/toolkit/query/react';
import { useSearchParams } from 'hooks/useSearchParams';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { parseInteger } from 'utils/parseInteger';
import { Pagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader';
import { useTrackSearchQuery } from 'features/trackSearch/api/trackSearchApi';
import { usePushSearchQuery } from 'features/trackSearch/TrackSearchView/hooks/usePushSearchQuery';
import { usePrefetchSearchTracks } from 'features/trackSearch/TrackSearchView/hooks/usePrefetchSearchTracks';
import { SearchInput } from 'features/trackSearch/TrackSearchView/SearchInput';
import { SearchResultList } from 'features/trackSearch/TrackSearchView/SearchResultList';

const SearchPage = () => {
  useDocumentTitle('Search');
  const { page: pageFromUrl, query: queryFromUrl } = useSearchParams(['page', 'query']);

  const { value, onChange, debouncedValue } = useDebouncedValue(queryFromUrl);
  usePushSearchQuery({ nextQuery: debouncedValue, prevQuery: queryFromUrl });

  const trackSearchArg = queryFromUrl
    ? { track: queryFromUrl, page: parseInteger(pageFromUrl) ?? undefined }
    : skipToken;
  const { data, isLoading, isFetching, isError, error } = useTrackSearchQuery(trackSearchArg);
  const { onPrefetchTrackSearch } = usePrefetchSearchTracks(queryFromUrl);

  const results = data?.results;
  const { page, totalPages } = data?.meta ?? {};

  const paginationView =
    page && totalPages && totalPages > 1 ? (
      <Pagination currentPage={page} totalPages={totalPages} onPrefetch={onPrefetchTrackSearch} />
    ) : null;

  const hasData = !!results?.length || !queryFromUrl || isFetching;

  return (
    <>
      <SearchInput value={value} onChange={onChange} />
      <>
        <Loader isLoading={isLoading} isError={isError} error={error} hasData={hasData}>
          <SearchResultList searchTrackList={results} />
        </Loader>
        {paginationView}
      </>
    </>
  );
};

export default SearchPage;
