import { TopTracksView } from 'features/topTracks/TopTracksView/TopTracksView';
import { useLocation } from 'react-router-dom';
import { parseInteger } from 'utils/parseInteger';

const defaultPage = 1;
const defaultLimit = 18;

const HomePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = parseInteger(params.get('page')) ?? defaultPage;
  const limit = parseInteger(params.get('limit')) ?? defaultLimit;

  return (
    <div>
      <TopTracksView page={page} limit={limit} />
    </div>
  );
};

export default HomePage;
