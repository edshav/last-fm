import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type HookReturns = {
  nextPageHref: string | null;
  prevPageHref: string | null;
} | null;

type HooksArg = {
  totalPages: number;
  page: number;
};

export const usePagination = ({ page, totalPages }: HooksArg): HookReturns => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [page]);

  const params = new URLSearchParams(location.search);

  const isLastPage = page >= totalPages;
  const isFirstPage = page === 1;

  let nextPageHref: string | null = null;
  let prevPageHref: string | null = null;

  if (!isLastPage) {
    params.set('page', String(page + 1));
    nextPageHref = `?${params.toString()}`;
  }

  if (!isFirstPage) {
    params.set('page', String(page - 1));
    prevPageHref = `?${params.toString()}`;
  }

  return { nextPageHref, prevPageHref };
};
