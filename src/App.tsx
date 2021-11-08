import { Layout } from 'components/Layout/Layout';
import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'routes';
import { globalStyles } from 'styles/globalStyles';

function App() {
  globalStyles();
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={null}>
                <Component />
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
