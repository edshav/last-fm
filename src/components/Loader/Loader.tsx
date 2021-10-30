import { SerializedError } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { LastFmError } from 'services/lastFm/baseQueryFn';
import { parseError } from 'utils/parseError';
import classes from './classes.module.css';

type Props = {
  isLoading: boolean;
  isError: boolean;
  error: LastFmError | SerializedError | undefined;
  children: ReactNode;
};

const Loader: FC<Props> = ({ children, isLoading, isError, error }) => {
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
  if (isError) return <>{errorMessage}</>;

  return <>{children}</>;
};

export default Loader;
