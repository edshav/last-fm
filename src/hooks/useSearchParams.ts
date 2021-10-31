import { useLocation } from 'react-router-dom';

type HookReturns = Record<string, string | null>;

export const useSearchParams = (paramNames: string[]): HookReturns => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return paramNames.reduce((acc, paramName) => {
    return Object.assign(acc, { [paramName]: params.get(paramName) });
  }, {});
};
