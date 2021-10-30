import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useArtistGetInfoQuery } from '../api/artistApi';

export const ArtistView: FC = () => {
  const { artistName } = useParams<{ artistName: string }>();

  const { data, isLoading, error, isError } = useArtistGetInfoQuery({ artistName });
  const artist = data?.artist;

  return (
    <Loader isLoading={isLoading} isError={isError} error={error}>
      {artist?.image ? <img src={artist.image} alt={artist.name ?? ''} /> : null}
    </Loader>
  );
};
