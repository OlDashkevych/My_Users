import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BlockLoading } from 'react-loadingg';
import { postsSelectors } from '../redux/posts';
import routes from '../routes';

const App: React.FC = () => {
  const loading: boolean = useSelector(postsSelectors.getLoading);
  return (
    <BrowserRouter>
      <Suspense fallback={<BlockLoading />}>
        <Switch>
          {routes.map(({ Component, path, label, exact }) => (
            <Route path={path} key={label} exact={exact}>
              <Component />
            </Route>
          ))}
        </Switch>
        {loading ? <BlockLoading /> : null}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
