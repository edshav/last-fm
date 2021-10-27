type ImageSize = 'small' | 'medium' | 'large' | 'extralarge';

type TrackImage<T extends ImageSize> = {
  '#text'?: string;
  size: T;
};

type TracksMeta = {
  page: string; // "1",
  perPage: string; // "50",
  totalPages: string; // "580674",
  total: string; // "29033686"
};

export type Track = {
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

export type ChartGetTopTracksResult = {
  tracks?: Track[];
  '@attr': TracksMeta;
};
export type ChartGetTopTracksArg = {
  page?: number; // defaults to 1
  limit?: number; // defaults to 50
};
