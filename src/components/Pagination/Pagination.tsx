import { FC } from 'react';
import { usePagination } from './usePagination';
import classes from './classes.module.css';
import { PaginationArrow } from './PaginationArrow';

type Props = {
  page: number;
  totalPages: number;
};

export const Pagination: FC<Props> = ({ page, totalPages }) => {
  const hRefs = usePagination({ page, totalPages });

  if (!hRefs) return null;

  const { nextPageHref, prevPageHref } = hRefs;

  return (
    <div className={classes.container}>
      <PaginationArrow href={prevPageHref}>&larr;</PaginationArrow>
      <PaginationArrow href={nextPageHref}>&rarr;</PaginationArrow>
    </div>
  );
};
