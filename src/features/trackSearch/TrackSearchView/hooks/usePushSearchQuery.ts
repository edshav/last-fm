import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const usePushSearchQuery = ({
  nextQuery,
  prevQuery,
}: {
  nextQuery: string;
  prevQuery: string | null;
}): void => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (nextQuery === prevQuery) return;

    function pushParams() {
      history.push(`?${params.toString()}`);
    }

    const params = new URLSearchParams(location.search);
    params.delete('page');

    if (nextQuery) {
      params.set('query', nextQuery);
      return pushParams();
    }
    params.delete('query');
    pushParams();
  }, [history, location.search, nextQuery, prevQuery]);
};
