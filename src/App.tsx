import { Layout } from 'components/Layout/Layout';
import { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import './index.css';

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            exact
            path={path}
            render={() => (
              <Suspense fallback={null}>
                <Component />
              </Suspense>
            )}
          />
        ))}
        <Redirect to="/404" />
      </Switch>
    </Layout>
  );
}

export default App;
