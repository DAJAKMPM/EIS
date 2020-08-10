import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthenticationPage from '../pages/admin/authentication';
import AdminMainPage from '../pages/admin/home';

const Routes = () => {
  return (
    <Switch>
      {/* Admin */}
      <Route exact path="/admin/login" component={AuthenticationPage} />
      <Route path="/admin" component={AdminMainPage} />

      {/* Viewers */}
    </Switch>
  );
};

export default Routes;
