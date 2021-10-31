import { SerializedError } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { LastFmError } from 'services/lastFm/baseQueryFn';
import { parseError } from 'utils/parseError';
import classes from './classes.module.css';

type Props = {
  isLoading: boolean;
  isError: boolean;
  hasData: boolean;
  error: LastFmError | SerializedError | undefined;
  children: ReactNode;
};

export const Loader: FC<Props> = ({ children, isLoading, isError, error, hasData }) => {
  const errorMessage = parseError(error);

  if (isLoading)
    return (
      <div className={classes.loaderContainer}>
        <div className={classes.ldsRipple}>
          <div></div>
          <div></div>
        </div>
      </div>
    );

  if (isError) return <div>{errorMessage}</div>;

  if (!hasData) return <div>No data</div>;

  return <>{children}</>;
};
