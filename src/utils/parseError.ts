import { SerializedError } from '@reduxjs/toolkit';
import { LastFmError } from 'services/lastFm/baseQueryFn';

export const parseError = (error: LastFmError | SerializedError | undefined): string =>
  (error as LastFmError | undefined)?.data?.message ?? 'Sth went wrong';
