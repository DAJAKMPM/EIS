import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthenticationPage from '../pages/admin/authentication';
import AdminDashboardPage from '../pages/admin/dashboard';

const Routes = () => {
  return (
    <Switch>
      {/* Admin */}
      <Route exact path="/admin/login" component={AuthenticationPage} />
      <Route path="/admin" component={AdminDashboardPage} />

      {/* Viewers */}
    </Switch>
  );
};

export default Routes;
