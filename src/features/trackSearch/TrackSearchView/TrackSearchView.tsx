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
import { usePushSearchQuery } from '../usePushSearchQuery';

export const TrackSearchView: FC = () => {
  const { page: pageFromUrl, query: queryFromUrl } = useSearchParams(['page', 'query']);
  const { value, onChange, debouncedValue } = useDebounce(300, queryFromUrl);
  usePushSearchQuery({ nextQuery: debouncedValue });

  const trackSearchArg = queryFromUrl
    ? { track: queryFromUrl, page: parseInteger(pageFromUrl) ?? undefined }
    : skipToken;
  const { data, isLoading, isFetching, isError, error } = useTrackSearchQuery(trackSearchArg);
  const results = data?.results;
  const { page, totalPages } = data?.meta ?? {};

  const paginationView =
    page && totalPages ? <Pagination page={page} totalPages={totalPages} /> : null;

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
