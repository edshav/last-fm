import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const emptySplitLastFmApi = createApi({
  reducerPath: 'lastFm',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
