import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosRequestConfig, AxiosError } from 'axios';
import { axiosLastFmInstance } from './axiosLastFmInstance';

export type LastFmError = {
  status?: number;
  data?: {
    error?: number;
    message?: string;
  };
};

export const baseQueryFn =
  (): BaseQueryFn<
    {
      url?: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    LastFmError
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosLastFmInstance({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
