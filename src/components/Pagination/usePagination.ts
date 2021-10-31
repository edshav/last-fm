import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type HookReturns = {
  prevPageHref: string | null;
  nextPageHref: string | null;
  prevPage: number | null;
  nextPage: number | null;
} | null;

type HooksArg = {
  totalPages: number;
  currentPage: number;
};

export const usePagination = ({ currentPage, totalPages }: HooksArg): HookReturns => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [currentPage]);

  const params = new URLSearchParams(location.search);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage >= totalPages;

  let prevPageHref: string | null = null;
  let nextPageHref: string | null = null;

  const prevPage = isFirstPage ? null : currentPage - 1;
  const nextPage = isLastPage ? null : currentPage + 1;

  if (!isFirstPage) {
    params.set('page', String(currentPage - 1));
    prevPageHref = `?${params.toString()}`;
  }
  if (!isLastPage) {
    params.set('page', String(currentPage + 1));
    nextPageHref = `?${params.toString()}`;
  }

  return { prevPageHref, nextPageHref, prevPage, nextPage };
};
