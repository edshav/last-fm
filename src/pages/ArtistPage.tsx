import { useParams } from 'react-router-dom';
import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { Loader } from 'components/Loader/Loader';
import { ArtistView } from 'features/artist/ArtistView/ArtistView';
import { useArtistGetInfoQuery } from 'features/artist/api/artistApi';

const ArtistPage = () => {
  const { artistName } = useParams<{ artistName: string }>();
  useDocumentTitle(artistName);
  const { data, isLoading, error, isError } = useArtistGetInfoQuery({ artistName });
  const artist = data?.artist;

  return (
    <Loader isLoading={isLoading} isError={isError} error={error} hasData={!!artist}>
      <ArtistView artist={artist} />;
    </Loader>
  );
};

export default ArtistPage;
