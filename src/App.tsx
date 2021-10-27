import { useChartGetTopTracksQuery } from 'features/topTracks/topTracksApi';

function App() {
  const { data, error, isLoading, isError } = useChartGetTopTracksQuery({ page: 1 });

  let mainContent: string | null = null;
  if (isLoading) {
    mainContent = '...Loading';
  }
  if (data) {
    mainContent = JSON.stringify(data, null, 2);
  }
  if (isError) {
    mainContent = JSON.stringify(error, null, 2);
  }

  return (
    <div>
      <header>Header</header>
      <main>{mainContent}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
