import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} exact />
      <Route path="/app" component={OrphanagesMap} />

      <Route path="/orphanages/create" component={CreateOrphanage} />
      <Route path="/orphanages/:id" component={Orphanage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
