import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

if (typeof baseURL === 'undefined') {
  throw new Error('API_BASE_URL is not provided');
}

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
