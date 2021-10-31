import { usePrefetch } from 'features/trackSearch/api/trackSearchApi';

export const usePrefetchSearchTracks = (
  track: string | null
): {
  onPrefetchTrackSearch: (prefetchingPage: number) => void;
} => {
  const prefetchTrackSearch = usePrefetch('trackSearch');

  const onPrefetchTrackSearch = (prefetchingPage: number) => {
    if (!track) return;
    prefetchTrackSearch({ track, page: prefetchingPage });
  };

  return { onPrefetchTrackSearch };
};
