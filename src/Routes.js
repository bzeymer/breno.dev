import React, { Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Loader from './components/loader';
import Structure from './components/structure';
import NotFound from './pages/not-found';
import Home from './pages/home';

function Routes() {
  return (
    <HashRouter basename='/'>
      <Structure>
        <hot-toast />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Structure>
    </HashRouter>
  );
}

export default Routes;
