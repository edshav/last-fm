export type TracksImageSize = 'small' | 'medium' | 'large' | 'extralarge';

type TrackImageDocument<T extends TracksImageSize> = {
  '#text': string;
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
  name: string;
  duration?: string;
  playcount?: string;
  listeners?: string;
  mbid?: string;
  url?: string;
  streamable?: {
    '#text'?: string;
    fulltrack?: string;
  };
  artist: {
    name: string;
    mbid: string;
    url?: string;
  };
  image: [
    TrackImageDocument<'small'>,
    TrackImageDocument<'medium'>,
    TrackImageDocument<'large'>,
    TrackImageDocument<'extralarge'>
  ];
};

export type Track = {
  title: string;
  artist: {
    name: string;
    url: string | null;
  };
  imageSet: Record<TracksImageSize, string>;
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
