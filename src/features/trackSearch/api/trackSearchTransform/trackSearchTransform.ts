import { SearchResultsDocument, SearchTrackResult } from 'features/trackSearch/types';
import { massageMeta } from './massageMeta';
import { massageResults } from './massageResults';

export const trackSearchTransform = (
  baseQueryReturnValue: SearchResultsDocument | undefined
): SearchTrackResult | Promise<SearchTrackResult> => {
  const { results: resultsDocument } = baseQueryReturnValue ?? {};
  const itemsPerPage = resultsDocument?.['opensearch:itemsPerPage'];
  const startPage = resultsDocument?.['opensearch:Query']?.startPage;
  const totalResults = resultsDocument?.['opensearch:totalResults'];

  const results = massageResults(resultsDocument?.trackmatches?.track);
  const meta = massageMeta({ itemsPerPage, startPage, totalResults });
  return { results, meta };
};
