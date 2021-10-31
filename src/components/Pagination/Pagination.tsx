import { FC } from 'react';
import { usePagination } from './usePagination';
import classes from './classes.module.css';
import { PaginationArrow } from './PaginationArrow';

type Props = {
  currentPage: number;
  totalPages: number;
  onPrefetch: (page: number) => void;
};

export const Pagination: FC<Props> = ({ currentPage, totalPages, onPrefetch }) => {
  const hRefs = usePagination({ currentPage, totalPages });

  if (!hRefs) return null;
  const { nextPageHref, prevPageHref, prevPage, nextPage } = hRefs;

  const onPrefetchPrev = prevPage
    ? () => {
        onPrefetch(prevPage);
      }
    : undefined;

  const onPrefetchNext = nextPage
    ? () => {
        onPrefetch(nextPage);
      }
    : undefined;

  return (
    <div className={classes.container}>
      <PaginationArrow href={prevPageHref} onHover={onPrefetchPrev}>
        &larr;
      </PaginationArrow>
      <PaginationArrow href={nextPageHref} onHover={onPrefetchNext}>
        &rarr;
      </PaginationArrow>
    </div>
  );
};
