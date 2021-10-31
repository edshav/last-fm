import { ChartGetTopTracksDocument, ChartGetTopTracksResult } from 'features/topTracks/types';
import { parseInteger } from 'utils/parseInteger';
import { massageTracks } from './massageTracks';

export const chartGetTopTracksTransform = (
  baseQueryReturnValue: ChartGetTopTracksDocument | undefined
): ChartGetTopTracksResult | Promise<ChartGetTopTracksResult> => {
  if (!baseQueryReturnValue) return { tracks: [] };
  const tracksDocument = baseQueryReturnValue?.tracks?.track;

  const metaDocument = baseQueryReturnValue.tracks?.['@attr'];

  const tracks = massageTracks(tracksDocument);

  const meta = {
    page: parseInteger(metaDocument?.page),
    perPage: parseInteger(metaDocument?.perPage),
    totalPages: parseInteger(metaDocument?.totalPages),
    total: parseInteger(metaDocument?.total),
  };

  return { tracks, meta };
};
