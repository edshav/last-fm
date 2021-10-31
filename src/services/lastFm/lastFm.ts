import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryFn } from './baseQueryFn';

export const emptySplitLastFmApi = createApi({
  reducerPath: 'lastFm',
  baseQuery: baseQueryFn(),
  endpoints: () => ({}),
});
