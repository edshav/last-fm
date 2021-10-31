import axios from 'axios';

const baseURL = 'https://ws.audioscrobbler.com/2.0/';

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
