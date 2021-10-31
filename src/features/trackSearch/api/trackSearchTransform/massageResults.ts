import { SearchTrack, SearchTrackDocument } from 'features/trackSearch/types';

export const massageResults = (
  searchTrackDocuments: SearchTrackDocument[] | undefined
): SearchTrack[] => searchTrackDocuments?.map(({ name, artist }) => ({ name, artist })) ?? [];
