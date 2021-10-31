import { Meta } from 'types';
import { parseInteger } from 'utils/parseInteger';

export const massageMeta = ({
  startPage,
  totalResults,
  itemsPerPage,
}: {
  startPage: string | undefined;
  totalResults: string | undefined;
  itemsPerPage: string | undefined;
}): Meta | null => {
  const page = parseInteger(startPage);
  const perPage = parseInteger(itemsPerPage);
  const total = parseInteger(totalResults);
  const totalPages = total && perPage ? Math.ceil(total / perPage) : null;
  return {
    page,
    perPage,
    total,
    totalPages,
  };
};
