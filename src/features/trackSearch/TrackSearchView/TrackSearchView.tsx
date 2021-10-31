import { FC } from 'react';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useSearchParams } from 'hooks/useSearchParams';
import { useTrackSearchQuery } from '../api/trackSearchApi';
import { parseInteger } from 'utils/parseInteger';
import { Pagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchResultList } from './SearchResultList/SearchResultList';
import { InitialText } from './SearchHeading/SearchHeading';
import { usePushSearchQuery } from './hooks/usePushSearchQuery';
import { usePrefetchSearchTracks } from './hooks/usePrefetchSearchTracks';

export const TrackSearchView: FC = () => {
  const { page: pageFromUrl, query: queryFromUrl } = useSearchParams(['page', 'query']);
  console.log({ pageFromUrl, queryFromUrl });

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
      <InitialText />
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
