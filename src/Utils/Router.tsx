import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../Pages/Main/App';
import OnCompany from '../Pages/OnComapny/OnCompany';

const Router = (): JSX.Element => (
  <>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/on-company' component={OnCompany} />
    </Switch>
  </>
);

export default Router;
