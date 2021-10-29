import axios from 'axios';
import { baseURL } from 'utils/constants';

const apiKey = process.env.REACT_APP_API_KEY;

if (typeof apiKey === 'undefined') {
  throw new Error('REACT_APP_API_KEY is not provided');
}

export const axiosLastFmInstance = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
    format: 'json',
  },
});
