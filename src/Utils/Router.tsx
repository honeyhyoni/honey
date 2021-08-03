import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../Pages/Main/App';
import OnCompany from '../Pages/OnComapny/OnCompany';
import TIL from '../Pages/TIL/TIL';

const Router = (): JSX.Element => (
  <>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/on-company' component={OnCompany} />
      <Route exact path='/til' component={TIL} />
    </Switch>
  </>
);

export default Router;
