import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Home';
import Home from './Landing';
import Symptoms from './Symptoms';
import Info from './Info';

const DesignRoutes: React.FC = () => (
  <Switch>
    <Route exact path={'/design'} component={Landing} />
    <Route exact path={'/design/symptoms'} component={Symptoms} />
    <Route exact path={'/design/landing'} component={Home} />
    <Route exact path={'/design/info'} component={Info} />
  </Switch>
);

export default DesignRoutes;
