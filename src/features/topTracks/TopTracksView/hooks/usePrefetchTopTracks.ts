import { usePrefetch } from 'features/topTracks/api/topTracksApi';

export const usePrefetchTopTracks = (): {
  onPrefetchChartTopTracks: (prefetchingPage: number) => void;
} => {
  const prefetchChartTopTracks = usePrefetch('chartGetTopTracks');

  const onPrefetchChartTopTracks = (prefetchingPage: number) => {
    prefetchChartTopTracks({ page: prefetchingPage });
  };

  return { onPrefetchChartTopTracks };
};
