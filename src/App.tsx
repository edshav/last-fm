import { Layout } from 'components/Layout';
import { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Switch>
      <Layout>
        {routes.map(({ path, Component }) => (
          <Route
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
      </Layout>
    </Switch>
  );
}

export default App;
