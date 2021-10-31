import { Meta } from 'types';

export type SearchTrackDocument = {
  name: string;
  artist: string;
  url?: string;
  streamable?: unknown; // 'FIXME'
  listeners?: unknown; // '511972';
  image?: unknown;
  mbid?: unknown; // '';
};

export type SearchResultsDocument = {
  results?: {
    'opensearch:Query'?: {
      '#text'?: string;
      role?: string;
      startPage?: string; // '1';
    };
    'opensearch:totalResults': string; // '738802';
    'opensearch:startIndex': string; // '0';
    'opensearch:itemsPerPage': string; // '30';
    trackmatches?: {
      track?: SearchTrackDocument[];
    };
    '@attr': unknown;
  };
};

export type SearchTrack = {
  name: string;
  artist: string;
};

export type SearchTrackResult = {
  results: SearchTrack[];
  meta: Meta | null;
};

export type TrackSearchArg = {
  limit?: number; // (Optional) : The number of results to fetch per page. Defaults to 30.
  page?: number; // (Optional) : The page number to fetch. Defaults to first page.
  track: string; // (Required) : The track name
  artist?: string; // (Optional) : Narrow your search by specifying an artist.
};
