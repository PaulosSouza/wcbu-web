import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/Home';
import SignUp from './pages/About';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/about" component={SignUp} />
  </Switch>
);

export default Routes;
