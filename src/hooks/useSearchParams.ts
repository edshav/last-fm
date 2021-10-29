import { useLocation } from 'react-router-dom';
import { parseInteger } from 'utils/parseInteger';

type HookReturns = {
  currentPage: number | undefined;
};

export const useSearchParams = (): HookReturns => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currentPage = parseInteger(params.get('page')) ?? undefined;

  return { currentPage };
};
