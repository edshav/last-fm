import { FC } from 'react';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useSearchParams } from 'hooks/useSearchParams';
import { useTrackSearchQuery } from '../api/trackSearchApi';
import { parseInteger } from 'utils/parseInteger';
import { Pagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';
import { useDebounce } from 'hooks/useDebounce';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchResultList } from './SearchResultList/SearchResultList';
import { InitialText } from './InitialText/InitialText';

export const TrackSearchView: FC = () => {
  const { page: currentPage } = useSearchParams(['page']);
  const { value, onChange, debouncedValue: debouncedSearchQuery } = useDebounce(300);

  const trackSearchArg = debouncedSearchQuery
    ? { track: debouncedSearchQuery, page: parseInteger(currentPage) ?? undefined }
    : skipToken;
  const { data, isLoading, isFetching, isError, error } = useTrackSearchQuery(trackSearchArg);
  const results = data?.results;
  const { page, totalPages } = data?.meta ?? {};

  const paginationView =
    page && totalPages ? <Pagination page={page} totalPages={totalPages} /> : null;

  const hasData = !!results?.length || !debouncedSearchQuery || isFetching;

  return (
    <>
      <SearchInput value={value} onChange={onChange} />
      {debouncedSearchQuery ? (
        <>
          <Loader isLoading={isLoading} isError={isError} error={error} hasData={hasData}>
            <SearchResultList searchTrackList={results} />
          </Loader>
          {paginationView}
        </>
      ) : (
        <InitialText />
      )}
    </>
  );
};
