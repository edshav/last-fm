import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const usePushSearchQuery = ({
  nextQuery,
  prevQuery,
}: {
  nextQuery: string;
  prevQuery: string | null;
}): void => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextQuery === prevQuery) return;

    function pushParams() {
      navigate(`?${params.toString()}`);
    }

    const params = new URLSearchParams(location.search);
    params.delete('page');

    if (nextQuery) {
      params.set('query', nextQuery);
      return pushParams();
    }
    params.delete('query');
    pushParams();
  }, [navigate, location.search, nextQuery, prevQuery]);
};
