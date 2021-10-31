import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const usePushSearchQuery = ({ nextQuery }: { nextQuery: string }): void => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (nextQuery) {
      params.set('query', nextQuery);
    } else {
      params.delete('query');
    }
    history.push(`?${params.toString()}`);
  }, [history, location.search, nextQuery]);
};
