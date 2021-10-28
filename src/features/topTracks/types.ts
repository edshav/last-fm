type ImageSize = 'small' | 'medium' | 'large' | 'extralarge';

type TrackImage<T extends ImageSize> = {
  '#text'?: string;
  size: T;
};

type TracksMetaDocument = {
  page?: string | null; // "1",
  perPage?: string | null; // "50",
  totalPages?: string | null; // "580674",
  total?: string | null; // "29033686"
};

type TracksMeta = {
  page: number | null;
  perPage: number | null;
  totalPages: number | null;
  total: number | null;
};

export type TrackDocument = {
  name?: string;
  duration?: string;
  playcount?: string;
  listeners?: string;
  mbid?: string;
  url?: string;
  streamable?: {
    '#text'?: string;
    fulltrack?: string;
  };
  artist?: {
    name?: string;
    mbid?: string;
    url?: string;
  };
  image?: [
    TrackImage<'small'>,
    TrackImage<'medium'>,
    TrackImage<'large'>,
    TrackImage<'extralarge'>
  ];
};

export type Track = {
  name: string | null;
  artist: {
    name: string | null;
    url: string | null;
  };
  image: string | null;
};

export type ChartGetTopTracksDocument = {
  tracks?: {
    track?: TrackDocument[];
    '@attr'?: TracksMetaDocument;
  };
};
export type ChartGetTopTracksResult = {
  tracks?: Track[];
  meta?: TracksMeta;
};
export type ChartGetTopTracksArg = {
  page?: number; // defaults to 1
  limit?: number; // defaults to 50
};
